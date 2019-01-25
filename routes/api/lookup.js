const express = require('express');
const router = express.Router();

router.get('/lookup', function(req, res, next) {
  res.render('lookup/lookup');
  const reservations = [1, 2, 3, 4];
});

module.exports = router;
