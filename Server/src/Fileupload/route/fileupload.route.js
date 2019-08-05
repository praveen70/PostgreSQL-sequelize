module.exports = function(app) {
	const upload = require('../../config/upload.config');
	const fileWorker = require('../controller/fileupload.controller');

	app.post('/api/uploadfile', upload.single('upload'), fileWorker.uploadFile);

	app.get('/api/uploadfile', fileWorker.findAll);

	app.get('/api/uploadfile/:id', fileWorker.findById);

	app.put('/api/uploadfile/:id', fileWorker.update);

	app.delete('/api/uploadfile/:id', fileWorker.delete);
};
