var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'ads-cms-backend'
    },
    port: 3000,
    db: 'mongodb://localhost/ads-cms-backend-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'ads-cms-backend'
    },
    port: 3000,
    db: 'mongodb://localhost/ads-cms-backend-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'ads-cms-backend'
    },
    port: 3000,
    db: 'mongodb://localhost/ads-cms-backend-production'
  }
};

module.exports = config[env];
