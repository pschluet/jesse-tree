terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.66.0"
    }
  }

  backend "s3" {
    bucket = "ps-terraform-backends"
    key    = "jesse-tree.tfstate"
    region = "us-east-1"
  }
}

locals {
  aws_region  = "us-east-1"
  name_prefix = var.project
  domain_name = "${var.subdomain}.${var.route53_hosted_zone_name}"
  common_tags = {
    Project = var.project
  }
}

provider "aws" {
  region = local.aws_region
  default_tags {
    tags = local.common_tags
  }
}

resource "null_resource" "remove_and_upload_to_s3" {
  triggers = {
    always_run = timestamp()
  }

  provisioner "local-exec" {
    command = "aws s3 sync ${path.module}/../build s3://${module.s3-cloudfront-website.s3_bucket_id}"
  }
}

module "s3-cloudfront-website" {
  source              = "riboseinc/s3-cloudfront-website/aws"
  version             = "2.0.0"
  fqdn                = local.domain_name
  ssl_certificate_arn = var.ssl_certificate_arn

  providers = {
    aws.main       = aws
    aws.cloudfront = aws
  }
}

# Route 53 record for the static site
data "aws_route53_zone" "main" {
  name         = var.route53_hosted_zone_name
  private_zone = false
}

resource "aws_route53_record" "web" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = local.domain_name
  type    = "A"

  alias {
    name                   = module.s3-cloudfront-website.cf_domain_name
    zone_id                = module.s3-cloudfront-website.cf_hosted_zone_id
    evaluate_target_health = false
  }
}
