let upload = require('../config/multer.config.js');
 

// router.post('/api/file/upload', upload.single("file"), fileWorker.uploadFile);

module.exports = function(app) {
    const fileWorker = require('../controllers/file.controller.js');

    app.post('/api/file/upload', upload.single("file"), fileWorker.uploadFile);

//     router.get('/api/file/info', fileWorker.listAllFiles);
 
// router.get('/api/file/:id', fileWorker.downloadFile);
    


}