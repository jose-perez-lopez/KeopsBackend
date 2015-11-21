'use strict';

const client = require("../../src/storage_redis.js");

module.exports = function () {
    this.Before( (done)=> {

        this.world = {};

        client.send_command("FLUSHDB", [],  (err, res) =>  {
            console.log("done",done)
            done()
        });
    });
};
