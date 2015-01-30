var tokens    = require('./tokens');
var userStore = require('../stores/user');

module.exports = function (req, res, next) {
  if (req.cookies.auth) {
    var data = tokens.decodeToken(req.cookies.auth);

    // get the user
    userStore.getUserById(data, function(err, user) {
      if (err) {
        // todo : solomon : log it
        res.send(500, "Error");
      } else {
        if (user) {
          req.user = user;
        } else {
          res.clearCookie('auth');
        }

        next();
      }
    });
  } else {
    next();
  }
};