'use strict';
const request = require("request");

module.exports = () => {
    this.Given(/^there is a pyramid already registered$/, (done) => {
        const world = this.world;
        // Write code here that turns the phrase above into concrete actions

        request(
            {
                uri: "http://localhost:3000/pyramids",
                method: 'POST',
                json: true
            }, (error, response, body)=> {
                world.responseStatusCode = response.statusCode;
                world.id = body.id;
                world.responseBody = body;
                done(error);
            });
    });
};
