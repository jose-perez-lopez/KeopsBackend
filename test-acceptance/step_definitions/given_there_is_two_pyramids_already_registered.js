'use strict';
const request = require("request");

module.exports = function (){
    this.Given(/^there are two pyramids already registered$/, (done) => {
        const world = this.world;


        // Write code here that turns the phrase above into concrete actions
        for(var i=0;i<2;i++) {
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
                    countRequest(error,done);
                });
        }
    });
};

var nRequestOk = 0;
function countRequest(error,done){
    nRequestOk++;
    if(nRequestOk==2){
        done(error);
    }
}


