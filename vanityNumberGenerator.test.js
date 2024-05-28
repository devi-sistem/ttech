// test/vanityNumberGenerator.test.js
const awsMock = require('aws-sdk-mock');
const { handler } = require('../lambda/vanityNumberGenerator');

describe('Vanity Number Generator Lambda', () => {
  beforeEach(() => {
    awsMock.mock('DynamoDB.DocumentClient', 'put', (params, callback) => {
      callback(null, {});
    });
  });

  afterEach(() => {
    awsMock.restore('DynamoDB.DocumentClient');
  });

  it('should generate vanity numbers and store them in DynamoDB', async () => {
    const event = { phoneNumber: '2345678' };
    const context = {};

    const result = await handler(event, context);

    expect(result.statusCode).toBe(200);
    const body = JSON.parse(result.body);
    expect(body.length).toBe(5);
    body.forEach(number => {
      expect(number).toMatch(/^[A-Z2-9]+$/); // Matches vanity numbers
    });
  });

  it('should handle phone numbers with non-digit characters', async () => {
    const event = { phoneNumber: '1-800-FLOWERS' };
    const context = {};

    const result = await handler(event, context);

    expect(result.statusCode).toBe(200);
    const body = JSON.parse(result.body);
    expect(body.length).toBe(5);
    body.forEach(number => {
      expect(number).toMatch(/^[A-Z2-9]+$/); // Matches vanity numbers
    });
  });
});
