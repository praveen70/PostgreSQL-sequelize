	
const multer = require('multer');
 
//var storage = multer.memoryStorage()
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       //console.log("config", file)
//       cb(null, __basedir + '/api/uploadfile')
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
//     }
//   });

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../images')
     
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })

var upload = multer({storage: storage});
 
module.exports = upload;