const db =  require('../../config/db.config');
const File = db.file;

exports.create = (req, res) => {	
	console.log("req body", req.body);
	// Save to MySQL database
	File.create({  
        fileId: req.body.fileId,
        fileName: req.body.fileName,
        fileType: req.body.fileType,
        filePathe: req.body.filePathe,
	     status: req.body.status
	}).then(file => {		
		
		res.send(file);
	});
};