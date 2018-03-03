terragrunt = {
  # Configure Terragrunt to automatically store tfstate files in S3
  remote_state = {
    backend = "s3"

    config {
      encrypt    = true
      bucket     = "mtranter-terraform-state"
      key        = "marktranter.com/state_a.tfstate"
      region     = "ap-southeast-2"
      lock_table = "terraform-ap-southeast-2"
    }
  }
}
