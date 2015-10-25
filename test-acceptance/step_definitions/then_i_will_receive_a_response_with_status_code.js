'use strict';
const request = require("request");
require("chai").should();

module.exports = () => {
    this.Then(/^I will receive a response with status code (\d+)$/, function (responseStatusCode, done) {
        // Write code here that turns the phrase above into concrete actions
        this.world.responseStatusCode.should.be.equal(Number(responseStatusCode));
        done();
    });


};
