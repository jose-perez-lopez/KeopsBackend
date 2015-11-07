"use strict";
const client = require("./storage_redis.js");

var registerPyramid = function (done){
    var defaulData = { status: [ 1, 1, 1 ] };
    client.incr('id', function(err, id) {
        client.set(id,JSON.stringify(defaulData));//TODO DEFAULT VALUES TO CONFIG FILE
        done(id);
    });
}

module.exports = registerPyramid;