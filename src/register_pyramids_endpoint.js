'use strict';
const registerPyramid = require("./register_pyramid.js");

module.exports = (req, res, next) => {
    registerPyramid((id)=> {
        var response = {"id":id};
        res.send(201,response);
        return next();
    });

};