var stream = require('stream');

const db = require("../../src/config/db.config");

const File = db.files;


exports.uploadFile = (req, res) => {
    console.log(req.file)
    File.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: req.file.buffer
    }).then(() => {
      res.json({msg:'File uploaded successfully! -> filename = ' + req.file.originalname});
    }).catch(err => {
      console.log(err);
      res.json({msg: 'Error', detail: err});
    });
  }


  