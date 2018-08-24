$(document).ready(function() {
    var config = {
        apiKey: "AIzaSyAo7WBaOtCGkEqZn0LCl_1uoRpP0cKKdEA",
        authDomain: "portfolioproject-17fea.firebaseapp.com",
        databaseURL: "https://portfolioproject-17fea.firebaseio.com",
        projectId: "portfolioproject-17fea",
        storageBucket: "portfolioproject-17fea.appspot.com",
        messagingSenderId: "974870010240"
    };
    firebase.initializeApp(config);
    
    var database = firebase.database();
    var myDBRef = database.ref();

    $('#submit').on('click', function(event) {
        event.preventDefault();
        $('#submit').css('background-color', '#FF3D00');
        var isValid = true;
        var userName = $('#name').val().trim();
        var userEmail = $('#email').val().trim();
        var userComment = $('#message').val().trim(); 
        if (userName === '') {
            $('#name-error').css('display', 'inline');
            isValid = false;
        } else {
            $('#name-error').css('display', 'none');
        }
        if (userEmail === '') {
            $('#email-error').css('display', 'inline');
            isValid = false;
        } else {
            $('#email-error').css('display', 'none');
        }
        if (userComment === '') {
            $('#message-error').css('display', 'inline');
            isValid = false;
        } else {
            $("#message-error").css('display', 'none');
        }
        if (isValid === true) {
            myDBRef.push().set({
                name: userName,
                email: userEmail,
                comment: userComment
            });
    
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
            $('.error').css('display', 'none');
        }
        
    });

    myDBRef.on('value', function(snapshot) {
        console.log(snapshot);
    }, function(errorObject) {
        console.log('there was an error: ' + errorObject.code);
    });
});