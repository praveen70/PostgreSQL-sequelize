module.exports = function(app) {

    const MobileVivo = require('../controller/vivo.controller');

    app.post('/api/mobileNames', MobileVivo.create);

     app.get('/api/mobileNames', MobileVivo.findAll);

    // app.get('/api/mobileNames/:id', mobile.findById);

    // app.put('/api/mobileNames/:id', mobile.update);

    // app.delete('/api/mobileNames/:id', mobile.delete);


}