var React  = require('react');
var Router = require('react-router');
var Auth   = require('../controls/Auth.react');
var auth   = require('../../utils/UserApi');

var AdminPage = React.createClass({
  // mark the object as needing authentication
  // give the object access to navigation
  mixins: [ Auth, Router.Navigation ],

  getInitialState: function() {
    return {};
  },

  logout: function() {
    auth.logout();

    // go home
    this.replaceWith('/');
  },

  componentDidMount: function() {
    var that = this;

    // todo : solomon : figure this out for isomorphic
    $.get('/api/getsecuredata', function(result) {
      var message = result.message;
      if (that.isMounted()) {
        that.setState({securemessage: message});
      }
    })
    .fail(function() {
      if (that.isMounted()) {
        that.setState({securemessage: "Access Denied to secure data"});
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