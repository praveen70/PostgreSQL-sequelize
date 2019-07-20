var express = require('express');
var router = express.Router();
var multer = require('multer');
var app = express()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'image/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

var upload = multer({ storage: storage }).single('profileImage');


router.post('/', function (req, res) {
    upload(req, res, function (err) {
        console.log(req.headers);
        if (err) {
            // An error occurred when uploading
        }
        res.json({
            success: true,
            message: 'Image uploaded!'
        });

        // Everything went fine
    })
});


module.exports = router;