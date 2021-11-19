variable "project" {
  type        = string
  description = "The name of the project"
  default     = "jesse-tree"
}

variable "ssl_certificate_arn" {
  type        = string
  description = "ARN of the ACM SSL certificate"
  default     = "arn:aws:acm:us-east-1:435432815368:certificate/0e97aedc-46a5-4394-b28a-5bb0766d3e65"
}

variable "route53_hosted_zone_name" {
  type        = string
  description = "The name of the Route 53 hosted zone that was setup when we registered our domain"
  default     = "pauldev.io"
}

variable "subdomain" {
  description = "The custom subdomain to use for this site"
  type        = string
  default     = "jessetree"
}