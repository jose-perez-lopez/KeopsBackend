'use strict';

const _ = require("lodash");

const request = require("request"),
    assert = require('assert');

module.exports = function (){
    this.Then(/^I will receive the following data$/,  (table, done) => {
        var result = this.world.responseBody;
       console.log("RESULT.length",result.length)
        if(result.length== null){ // just one pyramid we transform it into an array to compare with the data form the feature file
            result = [result];
        }

        var expectedData = table2PyramidJson(table);

        expectedData.map((element)=> {
            var elementFound = _.find(result, element);
            assert.deepEqual(elementFound, element);
        });
        done();
    });

};


function table2PyramidJson(table) {
    var jsonPyramid = [];
    for (var i = 0; i < table.hashes().length; i++) {
        var pyramidData = table.hashes()[i];
        pyramidData.id = Number(pyramidData.id);
        var status = pyramidData.status.split(',');
        status.forEach(function (part, index, arr) {
            arr[index] = Number(part)
        });
        pyramidData.status = status;
        jsonPyramid[i] = (pyramidData);
    }
    return jsonPyramid;

}