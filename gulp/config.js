var dest = "./public/js";
var src = './client/js';

module.exports = {
  browserSync: {
    proxy: "localhost:3001",
    files: ["public/stylesheets/**/*.css", "views/**/*.ejs"]
  },
  react: {
    src:  src + "/**/*.react.js",
    dest: "./build/js"
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries:    './gulp/nop.js',
      dest:       dest,
      outputName: 'vendor.js',
      // Additional file extentions to make optional
      extensions: ['.js'],
      // list of modules to make require-able externally
      require: ['react', 'underscore', 'react-router', 'flux', 'buffer']
    }, {
      entries:    src + '/app.js',
      dest:       dest,
      outputName: 'app.js',
      // list of externally available modules to exclude from the bundle
      external: ['react', 'underscore', 'react-router', 'flux', 'buffer']
    }]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc:  dest + '/*.js',
    dest:   dest
  }
};
