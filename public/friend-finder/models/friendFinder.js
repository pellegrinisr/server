var orm = require('../config/orm.js');

var friendFinder = {
    create: function(colsArray, valsArray, cb) {
        orm.create('friends', colsArray, valsArray, function(result) {
            cb(result);
        });
    }, 

    all: function(cb) {
        orm.all('friends', function(result) {
            cb(result);
        });
    }
};

module.exports = friendFinder;