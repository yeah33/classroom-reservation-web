const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
 
var schema = new Schema({
  name: {type: String, required: true, trim: true},
  role: {type:String}, //관리자 계정 만들 경우를 가정함
  studentID: {type: String, required: true, trim: true},
  password: {type: String},
  depart: { type: Schema.Types.ObjectId, ref: 'Dept' }
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});

schema.methods.generateHash = function(password) {
  return bcrypt.hash(password, 10); // return Promise
};

schema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password); // return Promise
};

var User = mongoose.model('User', schema);

module.exports = User;
