'use strict';
const request = require("request");
require("chai").should();

module.exports = function (){
    this.Then(/^I will receive a response with status code (\d+)$/,  (responseStatusCode, done)=> {
        this.world.responseStatusCode.should.be.equal(Number(responseStatusCode));
        done();
    });


};
