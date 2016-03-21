'use strict';

const restify = require('restify');
const server = restify.createServer();

server.use(restify.queryParser());
server.use(restify.bodyParser());

function basicRespond(req, res, next) {
    res.send('HELLO' );
    next();
}

server.get("/",basicRespond);
server.get("/pyramids",require("./get_pyramid_data_endpoint"));
server.get("/pyramids/:pyramidId",require("./get_pyramid_data_endpoint"));
server.put("/pyramids/:pyramidId",require("./set_pyramid_statuses_endpoint"));
server.post("/pyramids",require("./register_pyramids_endpoint"));
server.del("/pyramids/:pyramidId",require("./delete_pyramid_endpoint"));

var serverPort = process.env.PORT || 3000;

module.exports = {
    start: (port) => {
        return new Promise(
            (resolve, reject) => {
                server.listen(port, (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(server);
                    }
                });
            }
        );
    },
    stop: () => {
        server.close();
    }
};