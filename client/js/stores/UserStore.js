var AppDispatcher   = require('../dispatcher/AppDispatcher');
// var EventEmitter = require('events').EventEmitter;
var BaseStore       = require('./BaseStore');
var UserConstants   = require('../constants/UserConstants');
var _               = require('underscore');

// set a default user
var _user = globals.user;

// Method to load product data from mock API
function loadUser(data) {
  _user = data;
}

function removeUser() {
  _user = null;
}

// Extend ProductStore with EventEmitter to add eventing capabilities
var UserStore = _.extend({}, BaseStore, {
  getUser: function() {
    return _user;
  }
});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {

    // Respond to RECEIVE_DATA action
    case UserConstants.USER_AUTHED:
      loadUser(action.user);
      break;

    case UserConstants.USER_LOGGED_OUT:
      removeUser();
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  UserStore.emitChange();

  return true;
});

module.exports = UserStore;
