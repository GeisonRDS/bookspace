const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  profile: {type: Number, required: true},
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  whatsapp: {type: String, required: false},
  birthday: {type: Date, required: false},
  image_url: {type: String, required: true},
  city: {type: String, required: false},
  uf: {type: String, required: false},
  created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('User', UserSchema);
