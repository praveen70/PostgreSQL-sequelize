module.exports = function(app) {
	const Enum = require('../controller/enum.controller');

	app.post('/api/enum', Enum.create);

	app.get('/api/enum', Enum.findAll);

	// app.get('/api/mobileOppo/:id', mobile.findById);

	// app.put('/api/mobileOppo/:id', mobile.update);

	// app.delete('/api/mobileOppo/:id', mobile.delete);
};
