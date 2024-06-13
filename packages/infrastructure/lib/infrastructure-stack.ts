import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import frontendBucket from "./frontend-bucket";
import lambdaFunctions from "./lambdas";

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    frontendBucket(this);
    lambdaFunctions(this);
  }
}
