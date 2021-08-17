data "aws_iam_policy_document" "billing_full_access" {
  statement {
    actions   = ["aws-portal:*"]
    resources = ["*"]
  }
}

resource "aws_iam_policy" "billing_full_access" {
  name   = "BillingFullAccess"
  path   = "/"
  policy = data.aws_iam_policy_document.billing_full_access.json
}

data "aws_iam_policy_document" "admin" {
  statement {
    actions   = ["*"]
    resources = ["*"]
  }
}

resource "aws_iam_policy" "admin" {
  name   = "Admin"
  path   = "/"
  policy = data.aws_iam_policy_document.admin.json
}

resource "aws_iam_group" "admin" {
  name = "Admin"
  path = "/"
}

resource "aws_iam_group_policy_attachment" "admin-billing_full_access" {
  group      = aws_iam_group.admin.name
  policy_arn = aws_iam_policy.billing_full_access.arn
}

resource "aws_iam_group_policy_attachment" "admin-Billing" {
  group      = aws_iam_group.admin.name
  policy_arn = "arn:aws:iam::aws:policy/job-function/Billing"
}

resource "aws_iam_group_policy_attachment" "admin-AdministratorAccess" {
  group      = aws_iam_group.admin.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}

resource "aws_iam_user" "mwhitney" {
  name = "mwhitney"
  path = "/"
}

resource "aws_iam_user_group_membership" "mwhitney" {
  user   = aws_iam_user.mwhitney.name
  groups = [aws_iam_group.admin.name]
}
