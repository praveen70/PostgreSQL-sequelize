'use strict';

module.exports = function (app) {

    var mobile = require('../controller/mobile.controller');

    app.post('/api/mobileOppo', mobile.create);

    app.get('/api/mobileOppo', mobile.findAll);

    app.get('/api/mobileOppo/:id', mobile.findById);

    app.put('/api/mobileOppo/:id', mobile.update);

    app.delete('/api/mobileOppo/:id', mobile.delete);
};