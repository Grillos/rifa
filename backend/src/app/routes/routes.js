var User = require('../domain/User');
var Quiz = require('../domain/Quiz');


module.exports = (app) =>{
    
    User.register(app, '/users');
    Quiz.register(app, '/quizes');

}

