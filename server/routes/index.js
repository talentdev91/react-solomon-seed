// var browserify = require('browserify'),
  // literalify = require('literalify'),
  // React = require('react');
  // This is our React component, shared by server and browser thanks to browserify
  // MyApp = React.createFactory(require('../../build/js/app'))

/*
 * GET home page.
 */

exports.index = function(req, res){
  // var myAppHtml = React.renderToString(MyApp());
  res.render('index', { user: req.user });
};