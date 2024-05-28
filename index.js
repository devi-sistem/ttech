// lambda/vanityNumberGenerator.js
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const digitToLetters = {
  '2': 'ABC', '3': 'DEF', '4': 'GHI', '5': 'JKL',
  '6': 'MNO', '7': 'PQRS', '8': 'TUV', '9': 'WXYZ'
};

const phoneToVanity = (phoneNumber) => {
  let combinations = [''];
  for (const digit of phoneNumber) {
    if (digitToLetters[digit]) {
      const letters = digitToLetters[digit].split('');
      combinations = combinations.flatMap(prefix => letters.map(letter => prefix + letter));
    } else {
      combinations = combinations.map(prefix => prefix + digit);
    }
  }
  return combinations;
};

exports.handler = async (event) => {
  const phoneNumber = event.phoneNumber;
  const vanityNumbers = phoneToVanity(phoneNumber);

  const bestVanityNumbers = vanityNumbers.slice(0, 5);

  await dynamodb.put({
    TableName: process.env.TABLE_NAME,
    Item: {
      CallerNumber: phoneNumber,
      VanityNumbers: bestVanityNumbers
    }
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(bestVanityNumbers)
  };
};
