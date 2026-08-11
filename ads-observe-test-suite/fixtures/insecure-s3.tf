# Intentionally insecure Terraform for IaC scan testing (M-06, G-05)

resource "aws_s3_bucket" "ads_observe_test" {
  bucket = "ads-observe-test-public-bucket"
  acl    = "public-read"
}

resource "aws_s3_bucket_public_access_block" "ads_observe_test" {
  bucket = aws_s3_bucket.ads_observe_test.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_db_instance" "ads_observe_test_db" {
  identifier        = "ads-observe-test-db"
  engine            = "mysql"
  instance_class    = "db.t3.micro"
  allocated_storage = 20
  username          = "admin"
  password          = "hardcoded-password-not-secure"
  skip_final_snapshot = true
  publicly_accessible = true
}
