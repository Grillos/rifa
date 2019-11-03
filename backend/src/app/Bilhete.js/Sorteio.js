const mongoose = require('../../config/mongoose-conect');
var restful = require('./node_modules/node-restful');

var Sorteio = restful.model('quiz', mongoose.Schema({
  descricao: { type: String, required: true },
  premio: { type: String, required: true },
  imagem: { type: String, required: true },
  created_at: Date,
  updated_at: Date
}))
.methods(['get', 'post', 'put', 'delete']);

module.exports = Sorteio;