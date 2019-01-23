const express = require('express');
const router = express.Router();

router.get('/page2', function(req, res, next) {
  res.render('page2/page2');
});

module.exports = router;

$( function() {
  $("#datepicker").datepicker();
});

$( function() {
  $("#timepicker").timepicker();
});

script.
$(document).ready(function () {
$('#StartTime,#EndTime').timepicker({
timeFormat: 'h:mm p',
interval: '60',
minTime: '9:00am',
maxTime: '6:00pm',
// defaultTime: '11',
startTime: '9:00',
dynamic: false,
dropdown: true,
scrollbar: true
});
});
