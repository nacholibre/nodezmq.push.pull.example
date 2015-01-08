'use strict';

var zmq = require('zmq');
var push = zmq.socket('push');

push.bindSync('tcp://127.0.0.1:3003');

var i = 0;
while (i < 1000000) {
    //if (push._zmq.pending >= 5000) {
    //    console.log('pending messages limit reached!');
    //    continue;
    //}

    push.send(i);
    console.log('sent ' + i);

    i++;
}
