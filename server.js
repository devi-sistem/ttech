// lambda/fetchVanityNumbers.js
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Limit: 5,
    ScanIndexForward: false
  };

  const result = await dynamodb.scan(params).promise();
  return {
    statusCode: 200,
    body: JSON.stringify(result.Items)
  };
};
