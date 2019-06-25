module.exports = function(app) {

    const MobileVivo = require('../controller/vivo.controller');

    app.post('/api/mobileVivo', MobileVivo.create);

     app.get('/api/mobileVivo', MobileVivo.findAll);

    app.get('/api/mobileVivo/:id', MobileVivo.findById);

    app.put('/api/mobileVivo/:id', MobileVivo.update);

    app.delete('/api/mobileVivo/:id', MobileVivo.delete);


}