module.exports = {
  get: function(req, res) {
    res.json({message: "You Got Data"});
  },

  getsecure: function(req, res) {
    res.json({message: "I'm secure data"});
  }
};