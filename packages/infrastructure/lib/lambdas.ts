import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Cors, EndpointType, LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import * as sqs from "aws-cdk-lib/aws-sqs";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";

export default (scope: Construct) => {
  const queue = new sqs.Queue(scope, "landing-email-queue");
  const userEmailsTable = new dynamodb.Table(scope, "UserEmailsTable", {
    partitionKey: { name: "email", type: dynamodb.AttributeType.STRING },
  });

  const emailSender = new NodejsFunction(scope, "emailSender", {
    entry: "../lambda/landing-functions/send-email.ts",
    handler: "handler",
  });
  const userRegistrator = new NodejsFunction(scope, "userRegistrator", {
    entry: "../lambda/landing-functions/register-users.ts",
    handler: "handler",
    environment: {
      QUEUE_URL: queue.queueUrl,
      TABLE_NAME: userEmailsTable.tableName,
    },
  });

  queue.grantConsumeMessages(emailSender);
  queue.grantSendMessages(userRegistrator);
  userEmailsTable.grantReadWriteData(userRegistrator);

  new lambda.EventSourceMapping(scope, "QueueEventSourceMapping", {
    eventSourceArn: queue.queueArn,
    target: emailSender,
  });

  new LambdaRestApi(scope, "apigw", {
    handler: userRegistrator,
    endpointTypes: [EndpointType.EDGE],
    defaultCorsPreflightOptions: {
      allowOrigins: Cors.ALL_ORIGINS,
      allowMethods: Cors.ALL_ORIGINS,
      allowHeaders: Cors.DEFAULT_HEADERS,
    },
  });
};
