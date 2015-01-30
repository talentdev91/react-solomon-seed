var React     = require('react');
var auth      = require('../utils/UserApi');
var UserStore = require('../stores/UserStore');
var Router    = require('react-router');

var LoginPage = React.createClass({
  mixins: [ Router.Navigation ],

  // Get initial state from stores
  getInitialState: function() {
    return {};
  },

  statics: {
    attemptedTransition: null
  },

  handleSubmit: function(e) {
    _this = this;

    e.preventDefault();
    var name = this.refs.name.getDOMNode().value.trim();
    var pass = this.refs.password.getDOMNode().value.trim();
    if (!name || !pass) {
      return;
    }
    auth.login(name, pass)
      .fail(function(){
        _this.setState({loginFailed: true});
      });

    this.refs.name.getDOMNode().value = '';
    this.refs.password.getDOMNode().value = '';
  },

  // Add change listeners to stores
  componentDidMount: function() {
    UserStore.addChangeListener(this._onChange);
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange);
  },

  // Render cart view
  render: function() {
    return (
      <div className="page-login">
        <form className="form-signin" name="form" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Please sign in</h2>
          <div>[hint] login: test password: test</div>
          <input type="text" className="form-control" ref="name" placeholder="Email address" required autofocus></input>
          <input type="password" className="form-control" ref="password" placeholder="Password" required></input>
          { this.state.loginFailed &&
          <p className="error-message">
            Oops! That username or password is incorrect
          </p>
          }
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>
    );
  },

  _onChange: function() {
    if (UserStore.getUser()) {
      if (LoginPage.attemptedTransition) {
        var transition = LoginPage.attemptedTransition;
        LoginPage.attemptedTransition = null;
        transition.retry();
      } else {
        this.replaceWith('/');
      }
    }
  }
});

module.exports = LoginPage;
