var userStore = require('../stores/user');
var hash      = require('../security/hash');
var tokens    = require('../security/tokens');

var authenticate = function(login, pass, cb) {
  userStore.getUserByLogin(login, function(err, user){
    if (!user) {
      return cb(new Error("cannot find user"));
    }

    hash.getHashForSalt(pass, user.salt, function(err, hash) {
      if (err) {
        return cb(err);
      }

      if (hash === user.hash) {
        cb(null, user);
      } else {
        cb(new Error("Invalid password"));
      }
    });
  });
};

module.exports = {
  login: function(req, res) {
    authenticate(req.body.login, req.body.pass, function(err, user) {
      if (err || !user) {
        req.session = null;
        res.json(404, {
          message: "user not found"
        });
        return;
      }

      var token = tokens.createToken(user.id);
      req.user = user;

      // write the token out
      // one month
      var expiryDate = new Date(Number(new Date()) + 2592000000);
      res.cookie('auth', token, { expires: expiryDate, httpOnly: false });

      res.json(200, {
        message: "success",
        user:    user
      });
    });
  }
};