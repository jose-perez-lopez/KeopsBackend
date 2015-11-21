"use strict";
const client = require("./storage_redis.js");


var deletePyramid = function (id,done){
    client.del(id,(err,reply) =>{done(reply)});//TODO DEFAULT VALUES TO CONFIG FILE
}

module.exports = deletePyramid;