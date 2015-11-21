'use strict';
const request = require("request");

module.exports = function (){
    this.When(/^I delete the pyramid/, (done) => {
        const world = this.world;
        request(
            {
                uri: "http://localhost:3000/pyramids/"+world.id,
                method: 'DELETE',
                json: true
            }, (error, response, body)=> {
                done(error);
            });
    });
};
