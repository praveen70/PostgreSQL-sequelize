'use strict';

module.exports = function (app) {

  var hpDesktop = require('../contoller/hp.controller');

  app.post('/api/desktop-names', hpDesktop.create);

  app.get('/api/desktop-names', hpDesktop.findAll);

  app.get('/api/desktop-names/:id', hpDesktop.findById);

  app.put('/api/desktop-names/:id', hpDesktop.update);

  app.delete('/api/desktop-names/:id', hpDesktop.delete);
};