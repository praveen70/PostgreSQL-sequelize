'use strict';

module.exports = function (app) {

    var mobileMi = require('../controller/mi.controller');

    app.post('/api/mobileMi', mobileMi.create);

    app.get('/api/mobileMi', mobileMi.findAll);

    app.get('/api/mobileMi/:id', mobileMi.findById);

    app.put('/api/mobileMi/:id', mobileMi.update);

    app.delete('/api/mobileMi/:id', mobileMi.delete);
};