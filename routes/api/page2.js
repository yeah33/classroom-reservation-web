const express = require('express');
const router = express.Router();

router.get('/page2', function(req, res, next) {
  res.render('page2/page2');
});

module.exports = router;

//$( function() {
    //$("#datepicker").datepicker();
//});