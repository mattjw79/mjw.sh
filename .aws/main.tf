terraform {
  backend "s3" {
    bucket = "mjw.terraform"
    key    = "mjw.sh/terraform.state"
    region = "us-east-1"
  }
}

