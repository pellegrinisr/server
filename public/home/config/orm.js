var connection = require('./connection.js');

function printQuestionMarks(num) {
    var array = [];
    console.log(num);
    for (var i = 0; i < num; i++) {
        array.push('?');
    }
    return array.toString();
}

var orm = {
    //Create
    //INSERT INTO table_name (col1, [col2]...) VALUES (val1, [val2]...)
    create: function(table, colsArray, valsArray, cb) {
        var sql = "INSERT INTO " + table + " (";
        sql += colsArray.toString() + ") VALUES (";
        console.log(printQuestionMarks(valsArray.length));
        sql += printQuestionMarks(valsArray.length) + ")";
        console.log(sql);
        connection.query(sql, valsArray, function(error, data) {
            if (error) throw error;
            cb(data);
        });
    }
};

module.exports = orm;