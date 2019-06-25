module.exports = function(app) {

    const mobileAccessories = require('../controller/mobileAccessories.controller');

    app.post('/api/mobile-accessories', mobileAccessories.create);

    app.get('/api/mobile-accessories', mobileAccessories.findAll);

    app.get('/api/mobile-accessories/:id', mobileAccessories.findById);

    app.put('/api/mobile-accessories/:id', mobileAccessories.update);

     app.delete('/api/mobile-accessories/:id', mobileAccessories.delete);


}