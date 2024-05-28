const handler = require('./index.js').handler;
const event = require('./event.json');

handler(event)
  .then(console.log)
  .catch(console.error);