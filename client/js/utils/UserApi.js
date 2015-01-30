var UserActions = require('../actions/UserActions');

var auth = {
  login: function (email, pass) {
    // UserActions.userAuthed({name: "solomon"})
    return $.ajax({
      type: "post",
      url:"/api/login",
      xhrFields: {
        withCredentials: true
      },
      data: {
        login: email,
        pass: pass
      }
    })
    .done(function(data){
      UserActions.userAuthed(data);
    });
  },

  logout: function (cb) {
    // delete the cookie
    document.cookie = 'auth=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

    // call the action
    UserActions.userLoggedOut();
  }
};

module.exports = auth;