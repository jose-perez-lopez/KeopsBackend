"use strict";


const fs = require('fs');
const config = fs.existsSync( process.cwd()+'/src/config.json') ? require('./config.json') : {};

var redis = require("redis");

var client;

console.log("INIT REDIS CONNECTION");
if (process.env.REDISTOGO_URL) {
    console.log("REDIS CONNECTION PRO");
    var rtg   = require("url").parse(process.env.REDIS_URL);
    console.log("rtg.hostname",rtg.hostname,"rtg.port",rtg.port)
    client = require("redis").createClient(rtg.port, rtg.hostname);
    client.auth(rtg.auth.split(":")[1]);
} else {
    console.log("REDIS CONNECTION DEV INT");
    var redis_server_host = process.env.REDIS_HOST || config.redis_host
    var redis_server_port = process.env.REDIS_PORT || config.redis_port
    client = redis.createClient({"host":redis_server_host,"port":redis_server_port});
}


module.exports = client;