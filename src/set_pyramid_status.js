"use strict";
const client = require("./storage_redis.js");


var setPyramidSatus = function (id,status,done){
    client.set(id,JSON.stringify(status),(err,reply) =>{done(reply)});//TODO DEFAULT VALUES TO CONFIG FILE
}

module.exports = setPyramidSatus;