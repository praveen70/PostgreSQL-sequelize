var upload = require('../../src/config/multer.config');


module.exports = function(app) {
    const fileWorker = require('../controller/file.controller');

    app.post('/api/file/upload', upload.single('avatar'), fileWorker.uploadFile);
    


}