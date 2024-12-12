import { Context, APIGatewayProxyResult, SQSEvent } from "aws-lambda";
import * as SibApiV3Sdk from "@sendinblue/client";

const client = new SibApiV3Sdk.TransactionalEmailsApi();
client.setApiKey(
  SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY!
);

export const handler = async (
  event: SQSEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  for (const record of event.Records) {
    const { email } = JSON.parse(record.body);

    const msg = {
      to: [{ email }],
      sender: { email: "beratgenc.dev@gmail.com" },
      templateId: 1,
    };

    try {
      await client.sendTransacEmail(msg);
      console.log(email);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.body) {
        console.error(error.response.body);
      }
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Emails processed successfully",
    }),
  };
};
