'use strict';

const restify = require('restify');
const server = restify.createServer();
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.post("/pyramids",require("./register_pyramids_endpoint"))

server.listen(3000,(error)=>{

})