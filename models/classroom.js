const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* dept 학과명
   room 강의실번호 */

var schema = new Schema({
  department: { type: Schema.Types.ObjectId, ref: 'Dept' }, 
  roomnum: { type: Number, required: true, trim: true } 
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
var Classroom = mongoose.model('Classroom', schema);

module.exports = Classroom;