var Login = require('../pages/Login.react');
var auth = require('../../stores/UserStore');

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