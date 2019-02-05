const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


/*  name 학생 이름
    role 관리자 계정과 일반 계정 분리
    studentID 학번 또는 계정 (상의 필요)
    password 비밀번호
    depart 소속 학과 */
    
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
