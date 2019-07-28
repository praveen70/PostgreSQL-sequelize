const db = require('../../config/db.config.js');
const File = db.file;

const errorMiddileware = (req, res, next) => {
	throw new Error('From my');
};

exports.uploadFile = (req, res, error) => {
	console.log(req.file.path);
	if (req.file === undefined) {
		res.send({ error: 'Error: No File Selected!' });
		return false;
	} else {
		// if (!req.file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
		// 	res.send('Only image files are allowed!');
		// }
		File.create({
			fileName: req.file.originalname,
			originalName: req.file.originalname,
			type: req.file.mimetype,
			docPath: req.file.destination,
			size: req.file.size,
			path: req.file.path
		})
			.then(() => {
				res.json({ msg: 'File uploaded successfully! -> filename = ' + req.file.originalname });
			})
			.catch((err) => {
				console.log(err);
				res.json({ msg: 'Error', detail: err });
			});
	}


};

// // FETCH all Employee
// exports.findAll = (req, res) => {
// 	console.log('data');
// 	logger.logInfo('empdocscontroller.js -> findAll','info');
// 	Empdoc.findAll().then(empdoc => {
// 	  // Send all customers to Client
// 	  res.send(empdoc);
// 	  }).catch(function(err){
// 		console.log(err)

// 				res.send("The Id your seraching is not in database Please try with some other Id (findAll)");
// 	});
// };

// // Find a Customer by Id
// exports.findById = (req, res) => {
// 	// log.debug('preparing email');
// 	// log.info('sending email');
// 	// log.error('failed to send email');
// 	Empdoc.findById(req.params.empdocId).then(empdoc => {
// 		res.send(empdoc);
// 	}).catch(function(err){
// 		console.log(err)
// 				res.send("The Id your seraching is not in database Please try with some other Id ");

// 	});
// };

// // // // Update a Customer
// exports.update = (req, res) => {
// 	const id = req.params.empdocId;
// 	console.log(req.body);
// 	console.log("req.params",req.params);
// 		Empdoc.update( {  empId: req.body.empId,
// 						  docName: req.body.docName,
// 						  docType: req.body.docType,
// 						  docPath: req.body.docPath,
// 						  status :req.body.status
// 						   },
// 					 { where: {id: req.params.empdocId} }

// 				   ).then(() => {
// 					 res.status(200).send("updated successfully a customer with id = " + id);
// 				   }).catch(function(err){
// 				   	var errData={
// 							  errorNo: '',
// 							  errorType: 'API Error',
// 							  errorSource: 'empdoccontroller -> update() ',
// 							  errorTrace: err.message,
// 							  createdBy: 'dhruv jha '
// 							};
// 							errorController.create(
// 								errData
// 								);
// 								logger.logInfo('Error in update empdoc operation. Please contact administrator. Error number:' + errData.errorNo ,'update');
// 								res.send("update is not completed successfully");
// 				   });
// };

// // // Delete a Customer by Id
// exports.delete = (req, res) => {
// 	const id = req.params.empdocId;
// 	Empdoc.destroy({
// 	  where: { id: id }
// 	}).then(() => {
// 	  res.status(200).send('deleted successfully a customer with id = ' + id);
// 	}).catch(function(err){
// 					console.log(err)
// 							res.send("Delete is not completed successfully");
// 	});
// };
