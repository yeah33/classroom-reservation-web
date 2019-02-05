const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*  roomnum 강의실 번호
    booker 예약자의 studentID
    start 예약 시작 시간
    end 예약 종료 시간
    date 예약 날짜
    createdAt 예약 순간의 시각 정보
    
    예약시간 표기 기준
    1~24 1.1 1.2 1.3 1.4 --> 15분 간격
    시간대는 조정 가능 (학교 열려있는 시간에만 예약 가능하도록)
    4.3 :  4시 45분

    시작시각-종료시각 사이의 데이터 잡히지 않도록 조정 필요
    
    */

var schema = new Schema({
  roomnum: { type: Schema.Types.ObjectId, ref: 'Classroom' },  
  booker: { type: Schema.Types.ObjectId, ref: 'User' },  
  start: { type: Number, required: true, trim: true },  
  end: { type: Number, required: true, trim: true }, 
  date: { type: Date, required: true, trim: true },  
  createdAt: {type: Date, default: Date.now}
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
var Reservation = mongoose.model('Reservation', schema);

module.exports = Reservation;