const mongoose = require('../../config/mongoose-conect');
const restful = require('node-restful');
const Premio = require('./Premio')

const Sorteio = restful.model('quiz', mongoose.Schema({
  descricao: { type: String, required: true },
  premios: [{ type: Premio, required: true }],
  created_at: Date,
  updated_at: Date
}))
.methods(['get', 'post', 'put', 'delete']);

module.exports = Sorteio;