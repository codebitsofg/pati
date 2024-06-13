import { APIGatewayEvent } from "aws-lambda";
import * as AWS from "aws-sdk";

const queueUrl = process.env.QUEUE_URL;
const tableName = process.env.TABLE_NAME;
const dynamodb = new AWS.DynamoDB.DocumentClient();
const sqs = new AWS.SQS();

export const handler = async (event: APIGatewayEvent) => {
  try {
    let email: string | undefined;

    if (event.queryStringParameters && event.queryStringParameters.email) {
      email = event.queryStringParameters.email;
    }

    if (!email && event.body) {
      const requestBody = JSON.parse(event.body);
      if (requestBody.email) {
        email = requestBody.email;
      }
    }

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Email is required",
        }),
      };
    }

    const params: AWS.SQS.SendMessageRequest = {
      MessageBody: JSON.stringify({ email: email }),
      QueueUrl: queueUrl!,
    };

    await sqs.sendMessage(params).promise();

    const dbParams: AWS.DynamoDB.DocumentClient.PutItemInput = {
      TableName: tableName!,
      Item: {
        email: email,
      },
    };

    await dynamodb.put(dbParams).promise();

    const metaData = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    return {
      ...metaData,
      statusCode: 200,
      body: JSON.stringify({
        message: "Message published to SQS queue successfully",
      }),
    };
  } catch (error) {
    console.error("Error publishing message to SQS:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error publishing message to SQS" }),
    };
  }
};
