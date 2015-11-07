'use strict';
const getPyramidData = require("./get_pyramid_data.js");

module.exports = (req, res, next) => {
    getPyramidData(req.params.pyramidId, (data) => {
        res.send(200, JSON.parse(data));
        return next();
    });
};