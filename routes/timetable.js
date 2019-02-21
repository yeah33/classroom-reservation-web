const express = require('express');
const User = require('../models/user');
const Reservation = require('../models/reservation');
const router = express.Router();
const catchErrors = require('../lib/async-error');
const request = require('request');
const passport = require('passport');
const classroom = require('../models/classroom');
const timetable = require('../models/timetable');

function needAuth(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.flash('danger', 'Please signin first.');
    res.redirect('/login');
  }
}

