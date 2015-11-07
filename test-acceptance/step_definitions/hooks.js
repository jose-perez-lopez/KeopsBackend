'use strict';

var redis = require("redis"),
    client = redis.createClient({"host": "192.168.99.100", "port": "32770"});//TODO CONNECTION DATA TO CONFIG FILE AND PRO?

module.exports = function () {
    this.Before(function (done) {
        this.world = {};
        client.send_command("FLUSHDB", [], function (err, res) {
            done()
        });
    });
};
