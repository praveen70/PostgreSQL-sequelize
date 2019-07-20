'use strict';

module.exports = function (app) {

    var category = require('../controller/category.controller');

    app.post('/api/category', category.create);

    app.get('/api/category', category.findAll);

    // app.get('/api/mobileOppo/:id', mobile.findById);

    // app.put('/api/mobileOppo/:id', mobile.update);

    // app.delete('/api/mobileOppo/:id', mobile.delete);

};