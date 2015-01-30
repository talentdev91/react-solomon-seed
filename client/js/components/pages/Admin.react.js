var React  = require('react');
var Router = require('react-router');
var Auth   = require('../controls/Auth.react');
var auth   = require('../../utils/UserApi');

var AdminPage = React.createClass({
  // mark the object as needing authentication
  mixins: [ Auth, Router.Navigation ],

  // Get initial state from stores
  getInitialState: function() {
    return {};
  },

  logout: function() {
    auth.logout();

    // go home
    this.replaceWith('/');
  },

  // Add change listeners to stores
  componentDidMount: function() {
    var _this = this;

    $.get('/api/getsecuredata', function(result) {
      var message = result.message;
      if (_this.isMounted()) {
        _this.setState({securemessage: message});
      }
    })
    .fail(function() {
      if (_this.isMounted()) {
        _this.setState({securemessage: "Access Denied to secure data"});
      }
    });
  },

  // Render cart view
  render: function() {
    var secureLoaded  = this.state.securemessage || "Loading...";

    return (
      <div className="admin-page">
        i'm the admin page

        <p className="secure">
          {secureLoaded}
        </p>

        <button className="btn btn-lg btn-primary btn-block" onClick={this.logout}>Log Out</button>
      </div>
    );
  }
});

module.exports = AdminPage;