resource "aws_route53_zone" "mjw_sh" {
  name    = "mjw.sh"
  comment = "HostedZone created by Route53 Registrar"
}

resource "aws_route53_record" "mjw_sh" {
  zone_id = aws_route53_zone.mjw_sh.zone_id
  name    = "mjw.sh"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.mjw_sh.domain_name
    zone_id                = aws_cloudfront_distribution.mjw_sh.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_mjw_sh" {
  zone_id = aws_route53_zone.mjw_sh.zone_id
  name    = "www.mjw.sh"
  type    = "CNAME"
  ttl     = "300"
  records = [aws_route53_record.mjw_sh.fqdn]
}

resource "aws_route53_record" "dev_mjw_sh" {
  zone_id = aws_route53_zone.mjw_sh.zone_id
  name    = "dev.mjw.sh"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.dev_mjw_sh.domain_name
    zone_id                = aws_cloudfront_distribution.dev_mjw_sh.hosted_zone_id
    evaluate_target_health = false
  }
}
