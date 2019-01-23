const express = require('express');
const router = express.Router();

router.get('/page1', function(req, res, next) {
  res.render('page1/page1');
});

module.exports = router;
