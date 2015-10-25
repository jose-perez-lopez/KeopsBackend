'use strict';


module.exports = (req, res, next) => {
    var response = {"id":1};
    res.send(201,response);
    return next();
};