#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import {EC2Stack, LambdaStack} from '../lib/cdk-starter-stack';

const app = new cdk.App();
new LambdaStack(app, 'lambda-stack', {
  stackName: 'lambda-stack',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});
new EC2Stack(app, 'ec2-stack', {
  stackName: 'ec2-stack',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});
