'use strict';

const restify = require('restify');
const server = restify.createServer();

server.use(restify.queryParser());
server.use(restify.bodyParser());

server.post("/pyramids",require("./register_pyramids_endpoint"));
server.get("/pyramids/:pyramidId",require("./get_pyramid_data_endpoint"));
server.put("/pyramids/:pyramidId",require("./set_pyramid_statuses_endpoint"));


server.listen(3000,(error)=>{
    console.log('%s listening at %s', server.name, server.url);

})