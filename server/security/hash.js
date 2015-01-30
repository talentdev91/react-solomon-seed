var crypto     = require("crypto");
var secret     = process.env.PASSWORD_HASH_SECRET;
var LEN        = 128;
var ITERATIONS = 600;

if (!secret) {
  console.log("please add a PASSWORD_HASH_SECRET env variable");
  secret = "pudding is yum";
}

module.exports = {
  getHashAndSalt: function(pwd, cb) {
    pwd = pwd + secret;
    return crypto.randomBytes(LEN, function(err, salt) {
      if (err) {
        return cb(err);
      }
      salt = salt.toString("base64");
      return crypto.pbkdf2(pwd, salt, ITERATIONS, LEN, function(err, hash) {
        if (err) {
          return cb(err);
        }
        return cb(null, salt, hash.toString("base64"));
      });
    });
  },
  getHashForSalt: function(pwd, salt, cb) {
    pwd = pwd + secret;
    return crypto.pbkdf2(pwd, salt, ITERATIONS, LEN, function(err, hash) {
      return cb(err, hash != null ? hash.toString("base64") : void 0);
    });
  }
};