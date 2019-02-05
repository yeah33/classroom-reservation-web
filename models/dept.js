const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*  campus 인문캠 자연캠 구분
    univ 소속 대학 ex.인문대
    department 학과 ex.경영학과
    manager 담당자 이름
    contact 담당자 연락처 */


var schema = new Schema({
    campus: {type: String, required: true, trim: true},  
    univ: {type: String, required: true, trim: true},  
    department: {type: String, required: true, trim: true}, 
    manager: {type: String, required: true, trim: true},  
    contact: {type: Number, required: true, trim: true} 
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
var Dept = mongoose.model('Dept', schema);

module.exports = Dept;