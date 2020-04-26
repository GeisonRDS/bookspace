const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {type: String, required: true},
  genre: {type: String, required: true},
  synopse: {type: String, required: true},
  author: {type: String, required: true},
  stars: {type: Number, default: 0},
  views: {type: Number, default: 0},
  release_date_of: {type: Date, required: false},
  cover_url: {type: String, required: true},
  created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Book', BookSchema);
