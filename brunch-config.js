exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': 'app/js/skel.min.js',
      'app.js': 'app/js/main.js'
    }
  },
  stylesheets: {
    joinTo: {
      'app.css': 'app/style/main.scss'
    }
  }
};

exports.plugins = {
  babel: {presets: ['latest']}
};

exports.hot = true;
