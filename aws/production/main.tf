provider "aws" {
  profile = "default"
  region  = "us-east-1"
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
  backend "s3" {
    bucket  = "test-prod-tf-state"
    key     = "test-prod/test-prod.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}

resource "aws_s3_bucket" "test-prod-mono" {
  bucket = "test-prod-mono"
  acl    = "private"
}
