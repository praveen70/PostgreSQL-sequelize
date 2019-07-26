const multer = require('multer');
var upload = multer();

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		console.log('config', file);
		cb(null, __basedir + '/images');
	},
	filename: function(req, file, cb) {
		if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
			return cb(new Error('Only image files are allowed!'), false);
		}
		cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
	}
});

var upload = multer({ storage: storage });

module.exports = upload;
