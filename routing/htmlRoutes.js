var path = require('path');

module.exports = function(app) {
    //routes for home page and required assets
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home/index.html"));
    });

    app.get('/public/home/assets/javascript/:script', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home/assets/javascript/', req.params.script));
    });

    app.get('/public/home/assets/css/style.css', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home/assets/css/style.css'));
    });

    app.get('/public/home/assets/images/:image', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home/assets/images/', req.params.image));
    });

    //routes for first group project
    app.get('/public/first-project/index.html', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/first-project/index.html'));
    });

    app.get('/public/first-project/assets/css/:file', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/first-project/assets/css/', req.params.file));
    });

    app.get('/public/first-project/assets/javascript/:script', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/first-project/assets/javascript/', req.params.script));
    });

    app.get('/public/first-project/assets/images/Background-Pics/:img', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/first-project/assets/images/Background-Pics/', req.params.img));
    });

    app.get('/pulic/first-project/assets/images/2rodeo.jpg', function(req, res) {
        res.sendFile(path.join(__dirname, '/pulic/first-project/assets/images/2rodeo.jpg'));
    });

    //hangman game
    app.get('/public/hangman/index.html', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/hangman/index.html'));
    });

    app.get('/public/hangman/assets/css/style.css', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/hangman/assets/css/style.css'));
    });

    app.get('/public/hangman/assets/javascript/game.js', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/hangman/assets/javascript/game.js'));
    });

    app.get('/public/hangman/assets/images/:img', function(req, res){
        res.sendFile(path.join(__dirname, '../public/hangman/assets/images/', req.params.img));
    });

    app.get('/public/hangman/assets/sounds/:sound', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/hangman/assets/sounds/', req.params.sound));
    });

    //giphy
    app.get('/public/giphy/index.html', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/giphy/index.html'));
    });

    app.get('/public/giphy/assets/css/style.css', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/giphy/assets/css/style.css'));
    });

    app.get('/public/giphy/assets/javascript/app.js', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/giphy/assets/javascript/app.js'));
    });

    //trivia game
    app.get('/public/trivia-game/index.html', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/trivia-game/index.html'));
    });

    app.get('/public/trivia-game/assets/css/:style', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/trivia-game/assets/css/', req.params.style));
    });

    app.get('/public/trivia-game/assets/javascript/:script', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/trivia-game/assets/javascript/', req.params.script));
    });

    app.get('/public/trivia-game/assets/images/question-mark-background.png', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/trivia-game/assets/images/question-mark-background.png'));
    });

    app.get('/public/trivia-game/assets/sounds/:sound', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/trivia-game/assets/sounds/', req.params.sound));
    });

    //train schedule
    app.get("/public/train-schedule/index.html", function(req, res) {
        res.sendFile(path.join(__dirname, '../public/train-schedule/index.html'));
    });

    app.get('/public/train-schedule/assets/css/style.css', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/train-schedule/assets/css/style.css'));
    });

    app.get('/public/train-schedule/assets/javascript/app.js', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/train-schedule/assets/javascript/app.js'));
    });

    //crystal collector
    app.get('/public/crystal-collector/index.html', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/crystal-collector/index.html'));
    });

    app.get('/public/crystal-collector/assets/css/:style', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/crystal-collector/assets/css/', req.params.style));
    });

    app.get('/public/crystal-collector/assets/javascript/game.js', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/crystal-collector/assets/javascript/game.js'));
    });

    app.get('/public/crystal-collector/assets/images/:img', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/crystal-collector/assets/images/', req.params.img));
    });

    //friend finder
    app.get('/public/friend-finder/app/home.html', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/friend-finder/app/home.html'));
    });

    app.get('/public/friend-finder/app/survey.html', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/friend-finder/app/survey.html'));
    });


};