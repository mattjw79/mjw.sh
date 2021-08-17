resource "aws_route53_zone" "mjw_sh" {
  name    = "mjw.sh"
  comment = "HostedZone created by Route53 Registrar"
}

resource "aws_route53_record" "mjw_sh" {
  zone_id = aws_route53_zone.mjw_sh.zone_id
  name    = "mjw.sh"
  type    = "A"

  alias {
    name                   = "d2lersers2g84u.cloudfront.net."
    zone_id                = "Z2FDTNDATAQYW2"
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
