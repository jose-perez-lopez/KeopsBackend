'use strict';

const fs = require('fs');
const config = fs.existsSync(process.cwd() + '/src/config.json') ? require('./config.json') : {};

module.exports = {
	redis_host: process.env.redis_host || config.redis_host,
	redis_port: process.env.redis_port || config.redis_port,
	http_port : process.env.http_port || config.http_port
};
