var crypto    = require("crypto");
var shortid   = require("shortid");
var algorithm = "aes256";
var secretKey = process.env.TOKEN_SECRET;

if (!secretKey) {
  console.log("please add a TOKEN_SECRET env variable");
  secretKey = "i love cookies";
}

module.exports = {

  /*
    Creates an encoded token out of the given data.  Will add an expiration as part of the token
   */
  createToken: function(text, expires) {
    var cipher, encoded, salt;
    salt = shortid.generate();
    if (!expires) {
      expires = new Date();
      expires.setDate(expires.getDate() + 3650);
    }
    cipher = crypto.createCipher(algorithm, secretKey + salt);
    encoded = cipher.update(text + "|" + (expires.getTime()), 'utf8', 'hex') + cipher.final("hex");
    return encoded + "|" + salt;
  },

  /*
    Decodes the token.  Will return null if the token is invalid or expired.
   */
  decodeToken: function(token) {
    if (!token) {
      return null;
    }

    var idx = token.lastIndexOf("|");
    if (idx === -1) {
      return null;
    }

    var encrypted = token.substring(0, idx);
    var salt      = token.substring(idx + 1);
    var decipher  = crypto.createDecipher(algorithm, secretKey + salt);
    var updated   = decipher.update(encrypted, "hex", "utf8");
    var decoded   = null;

    try {
      decoded = updated + decipher.final("utf8");
    } catch (_error) {
      console.log("Malformed security token");
      return null;
    }

    if (!decoded) {
      return null;
    }

    idx = decoded.lastIndexOf("|");
    if (idx === -1) {
      return null;
    }

    var data = decoded.substring(0, idx);
    var timeout = parseInt(decoded.substring(idx + 1));

    if (isNaN(timeout)) {
      return null;
    }

    var expires = new Date(timeout);
    if (isNaN(expires.getTime())) {
      return null;
    }

    var now = new Date();
    if (now > expires) {
      console.log("token expired for user", data);
      return null;
    }

    return data;
  }
};