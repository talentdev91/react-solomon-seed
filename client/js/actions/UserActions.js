var AppDispatcher = require('../dispatcher/AppDispatcher');
var UserConstants = require('../constants/UserConstants');

// Define action methods
var UserActions = {

  // User is authenticated
  userAuthed: function(data) {
    AppDispatcher.handleAction({
      actionType: UserConstants.USER_AUTHED,
      user: data.user
    });
  },

  userLoggedOut: function() {
    AppDispatcher.handleAction({
      actionType: UserConstants.USER_LOGGED_OUT
    });
  }
};

module.exports = UserActions;
