var express = require('express');

module.exports = function (app, config) {
    app.configure(function () {
        app.use(express.compress());
        app.set('port', config.port);
        app.set('views', config.root + '/app/views');
        app.set('view engine', 'jade');
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(app.router);
    });
};
