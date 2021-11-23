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
  backend "s3-staging" {
    bucket  = "test-staging-tf-state"
    key     = "test-staging/test-staging.tfstate"
    region  = "us-west-2"
    encrypt = true
  }
}

resource "aws_s3_bucket" "test-staging-mono" {
  bucket = "test-staging-mono"
  acl    = "private"
}
