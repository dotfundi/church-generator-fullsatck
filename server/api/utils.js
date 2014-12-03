'use strict';

var fs = require('fs');
var shortid = require('shortid');

//remove a file
exports.fileRemove = function(file, res){
    if(typeof file != 'undefined'){
        fs.unlink(file, function(err){
            if (err) { return res.send(err); }
        });
    }
};

//generate id
exports.generateId = function(){
    return shortid.generate();
};
