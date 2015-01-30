var React  = require('react');
var Link   = require('react-router').Link;
var CDNImg = require('../controls/CDNImg.react');

var FirstPage = React.createClass({
  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {
    var that = this;

    // todo : solomon : figure this out for isomorphic
    $.get('/api/data', function(result) {
      var message = result.message;
      if (that.isMounted()) {
        that.setState({message: message});
      }
    });

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

  // Render page
  render: function() {
    var page = "Page 1"
    var loaded = this.state.message || "Loading...";
    var secureLoaded  = this.state.securemessage || "Loading...";

    return (
      <div className="first-page starter-template">
        <h1>Bootstrap starter template</h1>
        <p className="lead">Use this document as a way to quickly start any new project.<br/> All you get is this text and a mostly barebones HTML document.</p>
        <p>{page}</p>
        <p>
          This is from an http requests before the page loads '{loaded}'
        </p>
        <p className="secure" ng-show="secureData"></p>
        <p className="secure" ng-show="errorData">
          <Link to="Admin">{secureLoaded}</Link>
        </p>
        <CDNImg src="/images/lauren-cats.jpg" />
      </div>
    );
  }
});

module.exports = FirstPage;