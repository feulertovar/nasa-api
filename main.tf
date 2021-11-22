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
    bucket  = "nasa-api-tf-state"
    key     = "nasa-api/nasa-api.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}

resource "aws_s3_bucket" "dev-apps-tf" {
  bucket = "dev-apps-s3"
  acl    = "private"
}

resource "aws_s3_bucket"{
  bucket = "dev-apps-s3-buck2"
  acl    = "private"
}
