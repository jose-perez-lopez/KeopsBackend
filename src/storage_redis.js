"use strict";
const config = require("./config.json");
var redis = require("redis");

var redis_server_host = process.env.REDIS_HOST || config.redis_host
var redis_server_port = process.env.REDIS_PORT || config.redis_port

var client = redis.createClient({"host":redis_server_host,"port":redis_server_port});

module.exports = client;