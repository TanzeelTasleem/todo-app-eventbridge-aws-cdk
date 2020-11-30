import { EventBus, Rule } from "@aws-cdk/aws-events"
import * as cdk from "@aws-cdk/core"
import * as targets from "@aws-cdk/aws-events-targets"
import * as lambda from "@aws-cdk/aws-lambda"
import * as logs from "@aws-cdk/aws-logs"
import * as Iam from "@aws-cdk/aws-iam"
import * as appsync from "@aws-cdk/aws-appsync"
import * as dynamodb from "@aws-cdk/aws-dynamodb"
import * as sns from "@aws-cdk/aws-sns"
import * as subs from "@aws-cdk/aws-sns-subscriptions"
import * as s3 from "@aws-cdk/aws-s3"
import * as s3deploy from "@aws-cdk/aws-s3-deployment"
import * as cloudfront from "@aws-cdk/aws-cloudfront"
import * as origins from "@aws-cdk/aws-cloudfront-origins"

export class BackendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const api = new appsync.GraphqlApi(this, "Api", {
      name: "todo-app-event-bridge",
      schema: appsync.Schema.fromAsset("graphql/schema.graphql"),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,
        },
      },
      xrayEnabled: true,
    })

    const eventbus = new EventBus(this, "EventBus", {
      eventBusName: "todoAppsyncEventBus",
    })

    const rule = new Rule(this, "AppSyncEventBridgeRule", {
      eventPattern: {
        source: ["appsync"],
        detailType: ["addTodo"],
      },
      eventBus: eventbus,
    })

    const logGroup = new logs.LogGroup(this, "MyLogGroup", {
      logGroupName: "appsync/todoApp",
    })

    const eventPolicy = new Iam.PolicyStatement({
      effect: Iam.Effect.ALLOW,
      resources: ["*"],
      actions: ["events:PutEvents"],
    })

    const eventLambda = new lambda.Function(this, "eventBridgelambdaFunction", {
      code: lambda.Code.fromAsset("lambda"),
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: "event.handler",
    })

    rule.addTarget(new targets.LambdaFunction(eventLambda))
    rule.addTarget(new targets.CloudWatchLogGroup(logGroup))

    const snsPolicy = new Iam.PolicyStatement({
      effect: Iam.Effect.ALLOW,
      actions: ["sns:Publish", "sns:Subscribe"],
      resources: [
        "arn:aws:sns:us-east-2:191347546717:BackendStack-TopicBFC7AF6E-O4HYFV518XMG",
      ],
    })

    const topic = new sns.Topic(this, "Topic", {
      displayName: "event topic",
    })

    topic.addSubscription(
      new subs.EmailSubscription("tanzeeltasleem648@gmail.com")
    )
    
    const todoTable = new dynamodb.Table(this, "todoTableEventBridge", {
      partitionKey: { name: "id", type: dynamodb.AttributeType.STRING },
    })

    const todoLambda = new lambda.Function(this, "todoAppEventBridge", {
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: "main.handler",
      code: lambda.Code.fromAsset("lambda"),
    })

    eventLambda.addToRolePolicy(snsPolicy)
    todoTable.grantFullAccess(todoLambda)
    todoLambda.addToRolePolicy(eventPolicy)
    todoLambda.addEnvironment("TODOS_TABLE", todoTable.tableName)

    const lambdaDs = api.addLambdaDataSource("lambdaDatasource", todoLambda)

    lambdaDs.createResolver({
      typeName: "Query",
      fieldName: "getTodos",
    })
    lambdaDs.createResolver({
      typeName: "Mutation",
      fieldName: "createTodo",
    })
    lambdaDs.createResolver({
      typeName: "Mutation",
      fieldName: "deleteTodo",
    })


    const bucket = new s3.Bucket(this, "todoApp-EventBridge", {
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
    })

    new s3deploy.BucketDeployment(this, "todoApp-EventBridge-sns", {
      sources: [s3deploy.Source.asset("../public")],
      destinationBucket: bucket,
    })

    new cloudfront.Distribution(this, "Distribution", {
      defaultBehavior: { origin: new origins.S3Origin(bucket) },
    })

    new cdk.CfnOutput(this, "GraphQLAPIURL", {
      value: api.graphqlUrl,
    })

    new cdk.CfnOutput(this, "eventBusName", {
      value: eventbus.eventBusName,
    })

    new cdk.CfnOutput(this, "GraphQLAPIKey", {
      value: api.apiKey || "",
    })

    new cdk.CfnOutput(this, "Stack Region", {
      value: this.region,
    })
  }
}
