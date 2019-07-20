module.exports = function(app){
    const upload = require('../../config/upload.config');
    const fileWorker = require('../controller/fileupload.controller');
    // const uploads = require("express-fileupload")

    // app.use(uploads());

    app.post('/api/uploadfile',  upload.single("file"), fileWorker.uploadFile);
  };


//   let express = require('express');
// let router = express.Router();
// let upload = require('../config/multer.config.js');
 
// const fileWorker = require('../controllers/file.controller.js');
 
// router.post('/api/file/upload', upload.single("file"), fileWorker.uploadFile);
 
// router.get('/api/file/info', fileWorker.listAllFiles);
 
// router.get('/api/file/:id', fileWorker.downloadFile);
 
// module.exports = router;