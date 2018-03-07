output "root_cert_arn" {
  value = "${aws_acm_certificate.wildcard_with_san.arn}"
}
