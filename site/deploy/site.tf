provider "aws" {
  region = "ap-southeast-2"
}

terraform {
  backend "s3" {}
}

locals {
  duplicate_content_penalty_secret = "mtranter-s3-raw"
  bucket_name = "marktranter.com"
  domain = "${local.bucket_name}"
}

data "template_file" "bucket_policy" {
  template = "${file("${path.module}/website_bucket_policy.json")}"

  vars {
    bucket = "${local.bucket_name}"
    secret = "${local.duplicate_content_penalty_secret}"
  }
}

resource "aws_s3_bucket" "website_bucket" {
  bucket   = "${local.bucket_name}"
  policy   = "${data.template_file.bucket_policy.rendered}"

  website {
    index_document = "index.html"
  }
}

data "template_file" "deployer_role_policy_file" {
  template = "${file("${path.module}/deployer_role_policy.json")}"

  vars {
    bucket = "${local.bucket_name}"
  }
}

data "template_file" "pgp" {
  template = "${file("${path.module}/pgp.key")}"
}

resource "aws_iam_user" "deployer" {
  name = "marktranter-com-deployer"
}

resource "aws_iam_user_policy" "deployer" {
  name = "marktranter-com-deployer-policy"
  user = "${aws_iam_user.deployer.name}"

  policy = "${data.template_file.deployer_role_policy_file.rendered}"
}

resource "aws_iam_access_key" "deployer" {
  user = "${aws_iam_user.deployer.name}"
  pgp_key = "${data.template_file.pgp.rendered}"
}

data "terraform_remote_state" "common" {
  backend = "s3"
  config {
    bucket     = "mtranter-terraform-state"
    key        = "marktranter.com/common/state_a.tfstate"
    region     = "ap-southeast-2"
  }
}

resource "aws_cloudfront_distribution" "website_cdn" {
  enabled      = true
  price_class  = "PriceClass_All"
  http_version = "http2"

  "origin" {
    origin_id   = "origin-bucket-${aws_s3_bucket.website_bucket.id}"
    domain_name = "${aws_s3_bucket.website_bucket.website_endpoint}"

    custom_origin_config {
      origin_protocol_policy = "http-only"
      http_port              = "80"
      https_port             = "443"
      origin_ssl_protocols   = ["TLSv1"]
    }

    custom_header {
      name  = "User-Agent"
      value = "${local.duplicate_content_penalty_secret}"
    }
  }

  default_root_object = "index.html"

  "default_cache_behavior" {
    allowed_methods = ["GET", "HEAD", "DELETE", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods  = ["GET", "HEAD"]

    "forwarded_values" {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    min_ttl          = "0"
    default_ttl      = "300"                                              //3600
    max_ttl          = "1200"                                             //86400
    target_origin_id = "origin-bucket-${aws_s3_bucket.website_bucket.id}"

    viewer_protocol_policy = "redirect-to-https"
    compress               = true
  }

  "restrictions" {
    "geo_restriction" {
      restriction_type = "none"
    }
  }

  "viewer_certificate" {
    acm_certificate_arn      = "${data.terraform_remote_state.common.root_cert_arn}"
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1"
  }

  aliases = ["${local.domain}","www.${local.domain}"]

}

data "aws_route53_zone" "mtranter" {
  name         = "marktranter.com."
}

resource "aws_route53_record" "www" {
  zone_id = "${data.aws_route53_zone.mtranter.zone_id}"
  name    = "www"
  type    = "A"

  alias {
    name                   = "${aws_cloudfront_distribution.website_cdn.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.website_cdn.hosted_zone_id}"
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "root" {
  zone_id = "${data.aws_route53_zone.mtranter.zone_id}"
  name    = "marktranter.com"
  type    = "A"

  alias {
    name                   = "${aws_cloudfront_distribution.website_cdn.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.website_cdn.hosted_zone_id}"
    evaluate_target_health = true
  }
}

output "encrypted_deployer_id" {
  value = "${aws_iam_access_key.deployer.id}"
}

output "encrypted_deployer_access_key" {
  value = "${aws_iam_access_key.deployer.encrypted_secret}"
}
