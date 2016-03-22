'use strict';
const request = require("request");

module.exports = function (){
    this.When(/^I registry a new pyramid$/, (done) => {
        const world = this.world;
        // Write code here that turns the phrase above into concrete actions
        request(
            {
                uri: "http://localhost:3000/pyramids",
                method: 'POST',
                json: true
            }, (error, response, body)=> {
                console.log("REQUEST, ",error, " ", response, " ", body);
                world.responseStatusCode = response.statusCode;
                world.id = body.id;
                world.responseBody = body;
                done(error);
            });
    });
};
