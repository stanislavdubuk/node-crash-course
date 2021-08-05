const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg: msg });
  }
}

// module.exports = Logger;

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) =>
  console.log(`Called Listener: ${data.msg} ${data.id}`)
);

logger.log('Hello World');

const loggerTest = new Logger();

loggerTest.on('message', (data) => console.log('Called', data));

loggerTest.log('Hello test');
