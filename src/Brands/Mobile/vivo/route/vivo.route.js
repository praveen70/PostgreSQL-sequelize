module.exports = function(app) {

    const MobileVivo = require('../controller/vivo.controller');

    app.post('/api/mobileNames', MobileVivo.create);

     app.get('/api/mobileNames', MobileVivo.findAll);

    app.get('/api/mobileNames/:id', MobileVivo.findById);

    app.put('/api/mobileNames/:id', MobileVivo.update);

    app.delete('/api/mobileNames/:id', MobileVivo.delete);


}