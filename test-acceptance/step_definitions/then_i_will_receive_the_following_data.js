'use strict';

const _ = require("lodash");

const request = require("request"),
    assert = require('assert');

module.exports = () => {
    this.Then(/^I will receive the following data$/, function (table, done) {
        var result = this.world.responseBody;
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