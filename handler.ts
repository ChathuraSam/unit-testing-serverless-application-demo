import { APIGatewayProxyHandler } from "aws-lambda";

const hello: APIGatewayProxyHandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v2.0! Your function executed successfully!",
    }),
  };
};

export default hello;
