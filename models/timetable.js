const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* 
    roomnum 강의실 번호
    day 요일
    classstart 수업 시작 시각
    classend 수업 종료 시각

    수업시간 표기 기준 예약시간과 동일
   
*/

var schema = new Schema({
    roomInfo : { type: Schema.Types.ObjectId, ref:'Classroom'},
    day : { type: String, required: true, trim: true}, 
    classstart : { type: Number, required: true, trim:true},
    classend : { type: Number, required: true, trim: true},
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
var Classroom = mongoose.model('Timetable', schema);

module.exports = Timetable;
