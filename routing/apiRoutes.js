//for burger app
var burger = require('../public/burger/models/burger.js');

//for friend finder
var friendFinder = require('../public/friend-finder/models/friendFinder.js');


module.exports = function(app) {
    //routes for burger app
    
    //Create
    app.post('/api/burgers', function(req, res) {
        console.log(req.body.burger_name, req.body.devoured);
        burger.create(
            //create: function(colsArray, valsArray, cb)
            ['burger_name', 'devoured', 'image_url'],
            [req.body.burger_name, req.body.devoured, req.body.image_url],
            function(data) {
                res.json({id: data.insertId});
            }
        );
    });

    //Read
    app.get('/burgers', function(req, res) {
        console.log('route hit');
        burger.all(function(data) {
            var handlebarsObj = {
                burgers: data 
            };
            console.log(handlebarsObj);
            res.render('burger-index', handlebarsObj);
        });
    });

    //Update
    app.put('/api/burgers/:id', function(req, res) {
        var condition = "id=" + req.params.id;
        // update: function(colValObj, condition, cb)
        burger.update(
            {devoured: req.body.devoured},
            condition,
            function(data) {
                if (data.affectedRows === 0) {
                    return res.status(404).end();
                } else {
                    return res.status(200).end();
                }
            }
        );
    });

    //Delete
    app.delete('/api/burgers/:id', function(req, res) {
        var condition = "id=" + req.params.id;
        //delete: function(condition, cb)
        burger.delete(condition, function(data) {
            if (data.affectedRows === 0) {
                return res.status(404).end();
            } else {
                return res.status(200).end();
            }
        });
    });

    //routes for friend finder

    //Read
    app.get('/api/friends', function(req, res) {
        friendFinder.all(function(data) {
            var friendsArray = [];
            for (var i = 0; i < data.length; i++) {
                var friendObject = {name: data[i].name, photo: data[i].photo, questions: data[i].questions};
                friendsArray.push(friendObject);
            }
            res.json(friendsArray);
        });
    });
    
    //Create
    app.post('/api/friends', function(req, res) {
        console.log(req.body);
        // console.log(req.body.questions);
        
        
        friendFinder.create(
            ['name', 'photo', 'questions'],
            [req.body.name, req.body.photo, req.body.questions],
            function(data) {
                friendFinder.all(function(reply) {
                    // console.log(data);
                    // console.log(reply);
                    var friendsArray = [];
                    for (var i = 0; i < reply.length; i++) {
                        var questArray = reply[i].questions.split(',');
                        // console.log(questArray);
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
                            // console.log(friendsArray[i].questions);
                            // console.log(req.body.questions[j]);
                            totalDifference += Math.abs(parseInt(reqQuestArr[j]) - parseInt(friendsArray[i].questions[j]));
                        }
                            diffArray.push({index: i, difference: totalDifference});
                        }
                    }
                    // console.log(diffArray);
                    var lowestDiff = diffArray[0].difference;
                    var lowestDiffIndex = 0;
                    for (var i = 1; i < diffArray.length; i++) {
                        if (lowestDiff > diffArray[i].difference) {
                            lowestDiff = diffArray[i].difference;
                            lowestDiffIndex = i;
                        }
                    }
                    // console.log(lowestDiffIndex, lowestDiff);
                    res.send(friendsArray[lowestDiffIndex]);
                });
            }
        );
    });
};
