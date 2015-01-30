var React  = require('react');

var SecondPage = React.createClass({
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
    }).fail(function() {
      if (that.isMounted()) {
        that.setState({message: "Error getting data"});
      }
    });
  },

  render: function() {
    var page = "Page 2";
    var remoteData = this.state.message || "Loading...";

    return (
      <div className="second-page starter-template">
        <h1>This is the partial for view 2.</h1>
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