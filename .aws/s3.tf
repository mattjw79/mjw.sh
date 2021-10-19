resource "aws_s3_bucket" "mjw_terraform" {
  bucket = "mjw.terraform"
  acl    = "private"
}

resource "aws_s3_bucket" "mjw_sh" {
  bucket = "mjw.sh"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

resource "aws_s3_bucket" "dev_mjw_sh" {
  bucket = "dev.mjw.sh"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}
