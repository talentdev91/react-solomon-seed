var React        = require('react');
var Router       = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link         = Router.Link;

var NavBar = React.createClass({
  mixins: [Router.State],

  render: function () {
    var path = this.getPath();

    return (
      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="app">Project name</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className={path == '/' ? 'active' : ''}>
                <Link to="app">Page 1</Link>
              </li>
              <li className={path == '/page/2' ? 'active' : ''}>
                <Link to="Page2">Page 2</Link>
              </li>
              <li className={path == '/admin' ? 'active' : ''}>
                <Link to="Admin">Admin</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NavBar;