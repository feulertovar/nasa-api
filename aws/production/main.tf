provider "aws" {
  profile = "default"
  region  = "us-west-2"
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.63"
    }
  }
  backend "s3" {
    bucket  = "test-prod-tf-state"
    key     = "test-prod/test-prod.tfstate"
    region  = "us-west-2"
    encrypt = true
  }
}

resource "aws_s3_bucket" "test-prod-mono" {
  bucket = "test-prod-mono"
  acl    = "private"
}
