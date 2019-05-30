module.exports = function(app) {

    const mobile = require('../controller/mobile.controller');

    app.post('/api/mobile', mobile.create);

    app.get('/api/mobile', mobile.findAll);

    app.get('/api/mobile/:id', mobile.findById);

    app.put('/api/mobile/:id', mobile.update);

    app.delete('/api/mobile/:id', mobile.delete);


}