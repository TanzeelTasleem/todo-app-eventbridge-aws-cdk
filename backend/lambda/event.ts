var AWS = require("aws-sdk")
const sns = new AWS.SNS()

exports.handler = async function (event: any) {
  try {
    console.log("event detail", event.detail.todo.title)
    var params = {
      Message: `Todo is Created by Title : ${event.detail.todo.title}
                Todo id is : ${event.detail.todo.id}`,
      Subject: "Todo is Created",
      TopicArn:
        "arn:aws:sns:us-east-2:191347546717:BackendStack-TopicBFC7AF6E-O4HYFV518XMG",
    }
    const snsResult = await sns.publish(params).promise()
    console.log(await snsResult)
  } catch (error) {
    console.log("sns error", error)
  }
}
