const Logging = require('./logger');
const logging = new Logging();


logging.on('logging', (event) => {
    console.log(`logging was raised`);
    console.log(event);
})

logging.log('example msg')

