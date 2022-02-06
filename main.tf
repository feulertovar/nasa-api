provider "aws" {
  profile = "default"
  region  = "us-west-2"
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
    region  = "us-west-2"
    encrypt = true
  }
}

resource "aws_s3_bucket" "nasa-api-app" {
  bucket = "nasa-api-webview"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}