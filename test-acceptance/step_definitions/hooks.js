'use strict';



module.exports = () => {
    this.Before(
        (done) => {
            this.world = {};
        });
};
