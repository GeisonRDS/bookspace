const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  profile: {type: Number, required: true},
  email: {type: Number, required: true},
  password: {type: String, required: true},
  whatsapp: {type: String, required: false},
  birthday: {type: Date, required: false},
  city: {type: String, required: false},
  image_url: {type: String, required: true},
  uf: {type: String, required: false},
  created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('User', UserSchema);