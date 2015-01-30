var React        = require('react');
var Router       = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link         = Router.Link;
var NavBar       = require('./controls/NavBar.react');
var auth         = require('../stores/UserStore');

var FluxApp = React.createClass({
  // getInitialState: function () {
  //   return {
  //     loggedIn: auth.loggedIn()
  //   };
  // },

  // setStateOnAuth: function (loggedIn) {
  //   this.setState({
  //     loggedIn: loggedIn
  //   });
  // },

  // componentWillMount: function () {
  //   auth.onChange = this.setStateOnAuth;
  //   auth.login();
  // },

  render: function () {
    return (
      <div>
        <NavBar/>
        <div className="container" id="main">
            <RouteHandler/>
            <div>
              Solomon seed app: v<span>1</span>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = FluxApp;