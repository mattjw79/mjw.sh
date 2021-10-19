provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket = "mjw.terraform"
    key    = "mjw.sh/terraform.state"
    region = "us-east-1"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.63.0"
    }
  }
}
