	
const multer = require('multer');
 
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/api/uploadfile')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
  }
});
 
var upload = multer({storage: storage});
 
module.exports = upload;