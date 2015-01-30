var Login = require('./Login.react');
var auth = require('../stores/UserStore');

var Authentication = {
  statics: {
    willTransitionTo: function (transition) {
      if (!auth.getUser()) {
        Login.attemptedTransition = transition;
        transition.redirect('/login');
      }
    }
  }
};

module.exports = Authentication;