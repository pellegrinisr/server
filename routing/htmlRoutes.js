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
}