var tokens    = require('./tokens');
var userStore = require('../stores/user');

module.exports = function (req, res, next) {
  if (req.cookies.auth) {
    // decode the token into a user id
    var data = tokens.decodeToken(req.cookies.auth);

    // no token or can't be decoded, no auth
    if (!data) {
      return next();
    }

    // get the user from the data store by the user id
    userStore.getUserById(data, function(err, user) {
      if (err) {
        // todo : solomon : log it
        res.send(500, "Error");
      } else {
        // we got a user, attach it to the request
        if (user) {
          req.user = user;
        } else {
          // the user isn't valid, kill the cookie
          res.clearCookie('auth');
        }

        next();
      }
    });
  } else {
    next();
  }
};