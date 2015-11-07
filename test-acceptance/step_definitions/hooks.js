'use strict';

const client = require("../../src/storage_redis.js");

module.exports = function () {
    this.Before(function (done) {
        this.world = {};
        client.send_command("FLUSHDB", [], function (err, res) {
            done()
        });
    });
};
