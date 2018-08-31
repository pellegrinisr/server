var orm = require('../config/orm.js');

var contact = {
    //Create
    create: function(colsArray, valsArray, cb) {
        orm.create('contacts', colsArray, valsArray, function(result) {
            cb(result);
        });
    }
};

module.exports = contact;