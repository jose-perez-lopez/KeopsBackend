'use strict';


module.exports = (req, res, next) => {
    res.send(201,{"id":1});
    return next();
};