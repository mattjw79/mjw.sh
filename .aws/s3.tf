resource "aws_s3_bucket" "mjw_terraform" {
  bucket = "mjw.terraform"
  acl    = "private"
}

data "aws_iam_policy_document" "mjw_sh" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["arn:aws:s3:::mjw.sh/*"]

    principals {
      type        = "AWS"
      identifiers = ["arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E2996VOPOYP95S"]
    }
  }
}

resource "aws_s3_bucket" "mjw_sh" {
  bucket = "mjw.sh"
  acl    = "public-read"
  policy = data.aws_iam_policy_document.mjw_sh.json

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}
