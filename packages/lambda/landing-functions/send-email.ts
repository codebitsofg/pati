import {
  Context,
  APIGatewayProxyResult,
  APIGatewayEvent,
  SQSEvent,
} from "aws-lambda";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SG_API_KEY);

export const handler = async (
  event: SQSEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  for (const record of event.Records) {
    const { email } = JSON.parse(record.body);

    const msg = {
      to: email,
      from: "beratgenc.dev@gmail.com",
      templateId: "d-7e4dc4aac89348c5bf1b2a045ecae516",
    };

    try {
      await sgMail.send(msg);
      console.log("Email sent successfully to:", email);
    } catch (error) {
      console.error("Error sending email to:", email, error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello world",
    }),
  };
};
