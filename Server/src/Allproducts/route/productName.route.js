module.exports = function(app) {

    const productName = require('../controller/productName.controller');

    app.post('/api/productName', productName.create);

    // app.get('/api/product', product.findAll);

    // app.get('/api/mobileOppo/:id', mobile.findById);

    // app.put('/api/mobileOppo/:id', mobile.update);

    // app.delete('/api/mobileOppo/:id', mobile.delete);


};