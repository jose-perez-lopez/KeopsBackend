'use strict';
const request = require("request");

module.exports = () => {
    this.When(/^I set the statuses of the pyramid as$/, (statusesTable,done) => {
        const world = this.world;

        var status = statusesTable.hashes()[0].status.split(',');
        status.forEach(function (part, index, arr) {
            arr[index] = Number(part)
        });
        request(
            {
                uri: "http://localhost:3000/pyramids/"+world.id,
                method: 'PUT',
                body:{status:status},
                json: true
            }, (error, response, body)=> {
                world.responseStatusCode = response.statusCode;
                world.previousResponseBody =  world.responseBody;
                world.responseBody = body;
                done(error);
            });
    });
};
