//for friend finder
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: process.env.db_host,
    port: 3306,
    user: process.env.db_user,
    password: process.env.db_pass,
    database: 'friend_finderdb'
});

// var connection2 = mysql.createConnection({
//     host: process.env.db_host,
//     port: 3306,
//     user: process.env.db_user,
//     password: process.env.db_pass,
//     database: 'bamazon'
// });

connection.connect(function(error) {
    if (error) throw error;
    console.log("connected as id " + connection.threadId);
});

// connection2.connect(function(error) {
//     if (error) throw error;
//     console.log('connection 2 connected as id ' + connection2.threadId);
// });

module.exports = function(app) {
    //routes for friend finder
    app.get('/api/friends', function(req, res) {
        connection.query(
            'SELECT * FROM friends',
            function(error, data) {
                if (error) throw error;
                var friendsArray = [];
                for (var i = 0; i < data.length; i++) {
                    var friendObject = {name: data[i].name, photo: data[i].photo, questions: data[i].questions};
                    friendsArray.push(friendObject);
                }
                res.json(friendsArray);
            }
        );
    });

    app.post('/api/friends', function(req, res) {
        console.log(req.body);
        // console.log(req.body.questions);
        connection.query(
            'INSERT INTO friends SET ?',
            {
                name: req.body.name,
                photo: req.body.photo,
                questions: req.body.questions
            },
            function(error, response) {
                if (error) throw error;
                console.log(response);
                connection.query(
                    'SELECT * FROM friends',
                    function(error, reply) {
                        if (error) throw error;
                        var friendsArray = [];
                        for (var i = 0; i < reply.length; i++) {
                            var questArray = reply[i].questions.split(',');
                            var questIntArray = [];
                            for (var j = 0; j < questArray.length; j++) {
                                questIntArray.push(parseInt(questArray[j]));
                            }
                            var friendObject = {name: reply[i].name, photo: reply[i].photo, questions: questIntArray};
                            friendsArray.push(friendObject);
                        }
                        console.log(friendsArray);   
                        var diffArray = [];
                        for (var i = 0; i < friendsArray.length; i++) {
                            var totalDifference = 0;
                            if (friendsArray[i].name !== req.body.name) {
                                //console.log(req.body.questions.split(',').length);
                                var reqQuestArr = req.body.questions.split(',');
                            for (var j = 0; j < reqQuestArr.length; j++) {
                                    console.log(friendsArray[i].questions);
                                console.log(req.body.questions[j]);
                                totalDifference += Math.abs(parseInt(reqQuestArr[j]) - parseInt(friendsArray[i].questions[j]));
                            }
                                diffArray.push({index: i, difference: totalDifference});
                            }
                        }
                        console.log(diffArray);
                        var lowestDiff = diffArray[0].difference;
                        var lowestDiffIndex = 0;
                        for (var i = 1; i < diffArray.length; i++) {
                            if (lowestDiff > diffArray[i].difference) {
                                lowestDiff = diffArray[i].difference;
                                lowestDiffIndex = i;
                            }
                        }
                        console.log(lowestDiffIndex, lowestDiff);
                        res.send(friendsArray[lowestDiffIndex]);
                    }
                );
            }
        ); 
    });
};