# Nested Stack Example in AWS CDK - Complete Guide

A repository for an article on
[bobbyhadz.com](https://bobbyhadz.com/blog/aws-cdk-nested-stack)

## How to Use

1. Clone the repository

2. Install the dependencies

```bash
npm install
```

3. Deploy the CDK stacks

```bash
npx cdk deploy \
  lambda-stack \
  ec2-stack
```

4. Open the AWS CloudFormation Console and the stacks should be created in your
   default region

5. Cleanup

```bash
npx cdk destroy \
  lambda-stack \
  ec2-stack
```
