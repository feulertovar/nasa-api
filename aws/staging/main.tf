provider "aws" {
  profile = "default"
  region  = "us-east-1"
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.63"
    }
  }
  backend "s3" {
    bucket  = "test-staging-tf-state"
    key     = "test-staging/test-staging.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}

resource "aws_s3_bucket" "test-staging-mono" {
  bucket = "test-staging-mono"
  acl    = "private"
}
