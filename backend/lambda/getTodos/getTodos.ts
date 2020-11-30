const { DynamoDB } = require("aws-sdk")
const client = new DynamoDB.DocumentClient()

async function getTodos() {
  const params = {
    TableName: process.env.TODOS_TABLE,
  }
  try {
    const data = await client.scan(params).promise()
    return data.Items
  } catch (err) {
    console.log("getTodos error", err)
    return null
  }
}
export default getTodos
