"use strict";

const httpServices = require(process.cwd() + "/src/http_services");
const client = require("../../src/storage_redis.js");
const config = require(process.cwd() + '/src/config.js');

module.exports = function () {

    this.Before((scenario, done) => {
        this.world = {};
        clearDB()
            .then( ()=> httpServices.start(config.http_port))
            .then( ()=> {
                done();
            })
            .catch(done);
    });

    this.After((scenario, done) => {
        clearDB()
            .then( ()=> httpServices.stop())
            .then( ()=> {
                done();
            })
            .catch(done);
    });

    function clearDB(done){
        return new Promise((resolve, reject) => {
            client.send_command("FLUSHDB", [],  (err, res) =>  {
                if (err) return reject(err);
                resolve();
            })
        })

    }
};
