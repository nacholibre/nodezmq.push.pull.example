'use strict';

var zmq = require('zmq');
var pull = zmq.socket('pull');

pull.connect('tcp://127.0.0.1:3003');

pull.on('message', function(message) {
    console.log('message received ' + message);
});
