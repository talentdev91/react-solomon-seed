var React      = require('react');
var Router     = require('react-router');
var App        = require('./components/App.react');
var NotFound   = require('./components/NotFound.react');
var FirstPage  = require('./components/FirstPage.react');
var SecondPage = require('./components/SecondPage.react');
var LoginPage  = require('./components/Login.react');
var AdminPage  = require('./components/Admin.react');

var Route      = Router.Route, DefaultRoute = Router.DefaultRoute, NotFoundRoute = Router.NotFoundRoute;

var routes = (
  <Route name="app" handler={App} path="/">
    <DefaultRoute handler={FirstPage} />
    <Route name="Page2" path="/page/2" handler={SecondPage}/>
    <Route name="Login" path="/login" handler={LoginPage}/>
    <Route name="Admin" path="/admin" handler={AdminPage}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

module.exports = {
  init: function() {
    Router.run(routes, function (Handler) {
      React.render(<Handler/>, document.body);
    });
  }
};