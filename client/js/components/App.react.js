var React        = require('react');
var Router       = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link         = Router.Link;
var NavBar       = require('./controls/NavBar.react');
var auth         = require('../stores/UserStore');

var App = React.createClass({
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

module.exports = App;
