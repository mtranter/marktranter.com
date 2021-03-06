provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {}
}

data "aws_route53_zone" "zone" {
  name = "marktranter.com."
  private_zone = false
}

resource "aws_acm_certificate" "wildcard_with_san" {
  domain_name = "*.marktranter.com"
  validation_method = "DNS"
  subject_alternative_names  = ["marktranter.com"]
}

resource "aws_route53_record" "cert_with_san_validation" {
  name = "${aws_acm_certificate.wildcard_with_san.domain_validation_options.0.resource_record_name}"
  type = "${aws_acm_certificate.wildcard_with_san.domain_validation_options.0.resource_record_type}"
  zone_id = "${data.aws_route53_zone.zone.id}"
  records = ["${aws_acm_certificate.wildcard_with_san.domain_validation_options.0.resource_record_value}"]
  ttl = 60
}

resource "aws_acm_certificate_validation" "wildcard_with_san" {
  certificate_arn = "${aws_acm_certificate.wildcard_with_san.arn}"
  validation_record_fqdns = ["${aws_route53_record.cert_with_san_validation.fqdn}"]
}
