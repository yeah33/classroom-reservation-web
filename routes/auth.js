module.exports = (app, passport) => {
  app.get('/login', (req, res, next) => {
    res.render('login');
  });

  app.post('/login', passport.authenticate('local-signin', {
    successRedirect : '/home', // redirect to the secure profile section
    failureRedirect : '/', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  
  app.get('/signout', (req, res) => {
    req.logout();
    req.flash('success', '로그아웃 되었습니다.');
    res.redirect('/');
  });
};
