'use strict';
const request = require("request");
const should = require("chai").should();

module.exports = ()=>{
    this.Then(/^I will receive a response with an "([^"]*)" field$/, function (fieldName, done) {
        // Write code here that turns the phrase above into concrete actions
        this.world.responseBody.should.have.property(fieldName);
        done();
    });

}