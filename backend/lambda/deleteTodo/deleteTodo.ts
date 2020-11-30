const { DynamoDB } = require("aws-sdk")
const client = new DynamoDB.DocumentClient()

async function deleteTodo(Id: string) {
  const params = {
    TableName: process.env.TODOS_TABLE,
    Key: {
      id: Id,
    },
  }
  try {
    await client.delete(params).promise()
    return Id
  } catch (err) {
    console.log("DynamoDB error: ", err)
    return err
  }
}
export default deleteTodo
