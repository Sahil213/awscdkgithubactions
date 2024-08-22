import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class AwscdkgithubactionsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a Lambda function
    const myLambda = new lambda.Function(this, "MyLambda", {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: "index.handler",
      code: lambda.Code.fromAsset("lambda"),
    });

    // Create an API Gateway and link it to the Lambda function
    const api = new apigateway.LambdaRestApi(this, "MyApiGateway", {
      handler: myLambda,
      restApiName: "MyServiceAPI",
      description: "API Gateway that triggers a Lambda function",
    });
  }
}
