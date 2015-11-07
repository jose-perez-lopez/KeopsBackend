"use strict";

const client = require("./storage_redis.js");

var getPyramidData = function (id,done){

    if(id) {
        client.get(id, (err, reply)=> {
            var allPyramids = [];
            var aPyramid = {};
            aPyramid.id = Number(id);
            aPyramid.status = JSON.parse(reply).status;
            allPyramids[0] = aPyramid;
            done(JSON.stringify(allPyramids));

        })
    }else{
        client.send_command("KEYS",["[0-9]*"],(err,resp)=>{
            var keys = resp;
            client.mget(resp, (err,status)=>{
                var allPyramids = [];
                for(var i=0; i < keys.length;i++){
                    var aPyramid = {};
                    aPyramid.id = Number(keys[i]);
                    aPyramid.status = JSON.parse(status[i]).status;
                    allPyramids[i] = aPyramid;
                }
                done(JSON.stringify(allPyramids));
            })

        })
    }
}

module.exports = getPyramidData;