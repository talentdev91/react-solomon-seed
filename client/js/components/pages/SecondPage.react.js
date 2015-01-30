var React  = require('react');

// Flux cart view
var SecondPage = React.createClass({
  // Get initial state from stores
  getInitialState: function() {
    return {};
  },

  // Add change listeners to stores
  componentDidMount: function() {
    var _this = this;

    $.get('/api/data', function(result) {
      var message = result.message;
      if (_this.isMounted()) {
        _this.setState({message: message});
      }
    }).fail(function() {
      if (_this.isMounted()) {
        _this.setState({message: "Error getting data"});
      }
    });
  },

  // Render cart view
  render: function() {
    var page = "Page 2";
    var remoteData = this.state.message || "Loading...";

    return (
      <div className="second-page starter-template">
        <h1>This is the partial for view 2.</h1>
        <p>
            Showing of 'interpolate' filter: [[todo]]
        </p>

        <div className="cats"></div>

        <p>{page}</p>

        <p>
            This is from an async http requests '<span>{remoteData}</span>'
        </p>
    </div>
    );
  }
});

module.exports = SecondPage;