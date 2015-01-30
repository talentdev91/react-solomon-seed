var page = require('./index');
var data = require('./data');
var auth = require('./auth');

requiresAuth = function(req, res, next) {
  if (req.user) {
    return next();
  }

  res.send(403, "Forbidden");
}

module.exports = function (app) {
  app.get('/api/data', data.get);
  app.get('/api/getsecuredata', requiresAuth, data.getsecure);
  app.post('/api/login', auth.login);
  app.get('/', page.index);
};