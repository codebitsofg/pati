import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";

export default (scope: Construct) => {
  const siteBucket = new s3.Bucket(scope, "NextjsSiteBucket", {
    websiteIndexDocument: "index.html",
    websiteErrorDocument: "404.html",
    publicReadAccess: true,
    blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
    removalPolicy: cdk.RemovalPolicy.DESTROY,
    autoDeleteObjects: true,
  });

  new s3deploy.BucketDeployment(scope, "DeployNextjsSite", {
    sources: [s3deploy.Source.asset(".././web/out")],
    destinationBucket: siteBucket,
  });

  new cdk.CfnOutput(scope, "SiteURL", {
    value: siteBucket.bucketWebsiteUrl,
  });
};
