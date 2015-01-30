var React = require('react');

var CDNImg = React.createClass({
  render: function () {
    var cdnPath = globals.staticConfig.cdn;

    return (
      <img src={cdnPath + this.props.src} className={this.props.className} />
    );
  }
});

module.exports = CDNImg;