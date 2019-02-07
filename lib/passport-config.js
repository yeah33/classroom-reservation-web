const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = (passport) => {
  passport.serializeUser((user, done) => { // Strategy 성공 시 호출됨
    done(null, user.id); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
  });

  passport.deserializeUser((id, done) => { // 매개변수 id는 req.session.passport.user에 저장된 값
    User.findById(id, (err, user) => {
      done(null, user); // 여기의 user가 req.user가 됨
    });
  });

  passport.use('local-signin', new LocalStrategy({ // local 전략을 세움
    usernameField: 'stuendID',
    passwordField: 'password',
    session: true, // 세션에 저장 여부 ***
    passReqToCallback: true,
  }, (req, studentID, password, done) => {
    try {
      const user = await User.findOne({ studentID: studentID });
      if (user && await user.validatePassword(password)) {
        return done(null, user, req.flash('success', '반갑습니다!'));
      }
      return done(null, false, req.flash('danger', '유효하지 않은 ID 또는 비밀번호입니다.'));
    } catch (err) {
      done(err);
    }
  }));
};

