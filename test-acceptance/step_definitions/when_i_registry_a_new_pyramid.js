'use strict';
const request = require("request");

module.exports = () => {
    this.When(/^I registry a new pyramid$/,  (done) => {
        const world = this.world;
        // Write code here that turns the phrase above into concrete actions
        request.post("http://localhost:3000/pyramids",{},(error,response)=>{
            console.log(error);
            world.responseStatusCode = response.statusCode;
            world.responseBody = response.body;
            done(error);
        });
    });
};
