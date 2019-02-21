const express = require('express');
const User = require('../models/user');
const Reservation = require('../models/reservation');
const router = express.Router();
const catchErrors = require('../lib/async-error');
const request = require('request');
const passport = require('passport');
const Classroom = require('../models/classroom');
const dept = require('../models/dept')


function needAuth(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.flash('danger', 'Please signin first.');
    res.redirect('/login');
  }
}

router.get('/', function(req, res, next) {
  res.render('reservation');
});

/* GET home page. */
router.get('/', catchErrors(async (req, res, next) => {
  var query = {};
  const term = req.query.term;
  if (term) {
    query = {$or: [
      {roomInfo: {'$regex': term, '$options': 'i'}},  
      {booker: {'$regex': term, '$options': 'i'}},  
      {start: {'$regex': term, '$options': 'i' }},  
      {end: {'$regex': term, '$options': 'i'}}, 
      {date: {'$regex': term, '$options': 'i' }},  
      {createdAt: {'$regex': term, '$options': 'i'}}
    ]};
  }

  res.render('reservation');
}));

router.get('/reservation/roomnum', catchErrors(async (req, res, next) => {
  const user = await User.findById(req.user).populate('dept');
  const classroom = await Classroom.find({department: user.depart._id}).populate('dept');
  res.json(classroom);
}));

router.put('/:id', catchErrors(async (req, res, next) => {
  const reservation = await Reservation.findById(req.params.id);

  if (!reservation) {
    req.flash('danger', 'Not exist');
    return res.redirect('back');
  }

  reservation.date = req.body.date;
  reservation.roomInfo = req.body.q;

  await reservation.save();
  req.flash('success', 'Successfully updated');
  res.redirect('/index');
}));


router.post('/:id/reservation', needAuth, catchErrors(async (req, res, next) => {
  const user = req.session.user;
  const classroom = await classroom.findById(req.params.id);

  var reservation = new Reservation({
    date: req.body.date,
    roomInfo: classroom._id
  });

  await reservation.save();
  req.flash('success', 'Successfully posted');
  res.redirect('/index');
}));







module.exports = router;







