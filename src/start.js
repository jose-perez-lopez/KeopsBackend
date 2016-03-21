'use strict';

const config = require('./config.js');
const httpServices = require('./http_services.js');

httpServices
    .start(config.PORT)
    .then( server => {
        log.info(server.url);
    })
    .catch( error => {
        log.error(error);
    });
