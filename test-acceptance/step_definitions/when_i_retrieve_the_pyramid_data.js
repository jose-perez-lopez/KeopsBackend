'use strict';
const request = require("request");

module.exports = () => {
    this.When(/^I retrieve the pyramid data$/, (done) => {
        const world = this.world;
        // Write code here that turns the phrase above into concrete actions
        request(
            {
                uri: "http://localhost:3000/pyramids/"+world.id,
                method: 'GET',
                json: true
            }, (error, response, body)=> {
                world.responseStatusCode = response.statusCode;
                world.responseBody = body;
                done(error);
            });
    });
};