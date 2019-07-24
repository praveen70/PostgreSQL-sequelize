module.exports = function(app) {

    const MobileAccessories = require('../controller/mobileAccessories.controller');

    app.post('/api/MobileAccessories', MobileAccessories.create);

    // app.get('/api/product', product.findAll);

    // app.get('/api/mobileOppo/:id', mobile.findById);

    // app.put('/api/mobileOppo/:id', mobile.update);

    // app.delete('/api/mobileOppo/:id', mobile.delete);


};