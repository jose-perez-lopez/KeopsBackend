"use strict";
var redis = require("redis"),
    client = redis.createClient({"host":"192.168.99.100","port":"32770"});//TODO CONNECTION DATA TO CONFIG FILE AND PRO?


var setPyramidSatus = function (id,status,done){
    client.set(id,JSON.stringify(status),(err,reply) =>{done(reply)});//TODO DEFAULT VALUES TO CONFIG FILE
}

module.exports = setPyramidSatus;