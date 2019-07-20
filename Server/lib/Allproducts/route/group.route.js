'use strict';

module.exports = function (app) {

    var group = require('../controller/group.controller');

    app.post('/api/group', group.create);

    app.get('/api/group', group.findAll);

    // app.get('/api/mobileOppo/:id', mobile.findById);

    // app.put('/api/mobileOppo/:id', mobile.update);

    // app.delete('/api/mobileOppo/:id', mobile.delete);

};