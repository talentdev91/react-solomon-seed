var _            = require("underscore");
var config       = require("../config");
var staticMap    = {};
var staticLookup = {};

// var browserify = require('browserify'),
  // literalify = require('literalify'),
  // React = require('react');
  // This is our React component, shared by server and browser thanks to browserify
  // MyApp = React.createFactory(require('../../build/js/app'))

/*
 * GET home page.
 */

if (process.env.NODE_ENV == "production") {
  staticLookup = require('../../public/rev-manifest.json');
}

staticLookup.get = function(id) {
  return staticLookup[id] || id;
};

exports.index = function(req, res){
  // var myAppHtml = React.renderToString(MyApp());
  res.render('index', { user: req.user, map: staticLookup, config: config });
};
