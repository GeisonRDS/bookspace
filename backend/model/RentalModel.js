const mongoose = require('../config/database');
const Schema = mongoose.Schema;
const ObjectUserId = Schema.Types.ObjectId
const ObjectBookId = Schema.Types.ObjectId

const RentalSchema = new Schema({
  user_id: {type: ObjectUserId, required: true},
  user_name: {type: String, required: true},
  user_email: {type: String, required: true},
  user_whatsapp: {type: String, required: false},
  book_id: {type: ObjectBookId, required: true},
  book_title: {type: String, required: true},
  expected_return_date: {type: Date, required: true},
  devolution: {type: Date, default: ''},
  created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Rental', RentalSchema);
