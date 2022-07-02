const EventEmitter = require('events')

class Logging extends EventEmitter {
    log(msg) {
        console.log(msg);
        this.emit('logging', { id: 1, url: 'http://' })

    }
}

module.exports = Logging