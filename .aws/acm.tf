resource "aws_acm_certificate" "mjw_sh" {
  domain_name       = "mjw.sh"
  validation_method = "DNS"

  subject_alternative_names = ["*.mjw.sh"]

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "mjw_sh_validation" {
  for_each = {
    for dvo in aws_acm_certificate.mjw_sh.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.mjw_sh.zone_id
}
