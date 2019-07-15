module.exports = function(app) {

    const product = require('../controller/product.controller');

    app.post('/api/product', product.create);

    // app.get('/api/product', product.findAll);

    // app.get('/api/mobileOppo/:id', mobile.findById);

    // app.put('/api/mobileOppo/:id', mobile.update);

    // app.delete('/api/mobileOppo/:id', mobile.delete);


}