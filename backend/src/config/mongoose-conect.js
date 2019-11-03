var restful = require('../app/domain/node_modules/node-restful'),
    mongoose = restful.mongoose;
    
mongoose.connect('mongodb://localhost:27017/quiz');

module.exports = mongoose