import { todo } from "../todo/todo"
const { DynamoDB } = require("aws-sdk")
const client = new DynamoDB.DocumentClient()

const AWS = require("aws-sdk")
// AWS.config.region = process.env.AWS_REGION || 'us-east-1'
const eventbridge = new AWS.EventBridge()

async function createTodo(todo: todo) {
  const params = {
    TableName: process.env.TODOS_TABLE,
    Item: todo,
  }
  const Eventparams = {
   Entries: [
      {
        Source:"appsync",
        DetailType:"addTodo",
        Detail:JSON.stringify({
          todo:todo
        }),
        EventBusName:"todoAppsyncEventBus"
      },
    ],
  }

  try {
    const result = await eventbridge.putEvents(Eventparams).promise()
    await client.put(params).promise()
    console.log("result", result)
    return todo
  } catch (err) {
    console.log("createTodocatch error", err)
    return null
  }
}
export default createTodo
