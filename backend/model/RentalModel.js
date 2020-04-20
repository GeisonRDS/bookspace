const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const RentalSchema = new Schema({
  user_id: {type: String, required: true},
  book_id: {type: String, required: true},
  devolution: {type: Date, required: false},
  created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Rental', RentalSchema);