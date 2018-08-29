var connection = require('./connection.js');

function printQuestionMarks(num) {
    var array = [];
    console.log(num);
    for (var i = 0; i < num; i++) {
        array.push('?');
    }
    return array.toString();
}

function objToSql(obj) {
    var array = [];
    for (key in obj) {
        var value = obj[key];
        if(Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'";
            }
            array.push(key + "=" + value);
        }
    }
    return array.toString();
}

var orm = {
    all: function(table, cb) {
        var sql = 'SELECT * FROM ' + table;
        connection.query(sql, function(error, data) {
            if (error) throw error;
            cb(data);
        });
    },

    create: function(table, colsArray, valsArray, cb) {
        var sql = 'INSERT INTO ' + table + '(' + colsArray.toString() + ')';
        sql += ' VALUES (' + printQuestionMarks(valsArray.length) + ')';
        console.log(sql);
        connection.query(sql, valsArray, function(error, data) {
            if (error) throw error;
            cb(data);
        });
    }
};

module.exports = orm;