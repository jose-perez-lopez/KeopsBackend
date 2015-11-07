"use strict";
var redis = require("redis"),
    client = redis.createClient({"host":"192.168.99.100","port":"32770"});//TODO CONNECTION DATA TO CONFIG FILE AND PRO?

var registerPyramid = function (done){
    var defaulData = { status: [ 1, 1, 1 ] };
    client.incr('id', function(err, id) {
        client.set(id,JSON.stringify(defaulData));//TODO DEFAULT VALUES TO CONFIG FILE
        done(id);
    });
}

module.exports = registerPyramid;