const db = require('../../config/db.config.js');
const File = db.file;
const fs = require('fs');

exports.uploadFile = (req, res) => {
  console.log(req.files);
   if(req.files){
    // let [ { name } ] = req.files
    //     console.log(name); 
    };
    // File.create({
    //   Id: req.body.empId,
    //   docName: req.body.docName,
    //   docType: req.body.docType,
    //   docPath: req.body.docPath,
    //   status: req.body.status
    // }).then(() => {
    //   res.json({msg:'File uploaded successfully! -> filename = ' + req.file.docName});
    // }).catch(err => {
    //   console.log(err);
    //   res.json({msg: 'Error', detail: err});
    // });

  // File.create({
  //   Id: req.body.empId,
	//   docName: req.body.docName,
	//   docType: req.body.docType,
	//   docPath: req.body.docPath,
	//   status: req.body.status
  //   }).then(() => {
  //     file.mv('../../image' + __filename, function(err){
  //       if(err){
  //         console.log(err);
  //         res.send('error occurred');
  //       }else{
  //         res.send("Done")
  //       }
  //     });
  //     res.json({ msg: 'File uploaded successfully! -> filename = ' + req.file.docName });
  //   });
    // .catch((err) => {
    //   console.log(err);
    //   res.json({ msg: 'Error', detail: err });
    // });
};


// Upload a Multipart-File then saving it to MySQL database
// exports.upload = (req, res, err) => {
//   console.log("vsghdvhgsdhgvdshg")
//   console.log(err.field);
// 	console.log(req) ;
// 	File.create({
//     type: req.file.mimetype,
//     name: req.file.originalname,
//     data: fs.readFileSync(__basedir + '/image/' + req.file.filename)
//   }).then(image => {
//     try{
//       fs.writeFileSync(__basedir + '/image' + image.name, image.data);

//       // exit node.js app
//       res.json({'msg': 'File uploaded successfully!', 'file': req.file});
//     }catch(e){
//       console.log(e);
//       res.json({'err': err.field});
//     }
//   })
// };


// // console.log(db.empdocs);
// // Post a Employee
// exports.create = (req, res) => {
// 	console.log("req body", req.body);
// 	// Save to MySQL database
// 	Empdoc.create({
// 	  empId: req.body.empId,
// 	  docName: req.body.docName,
// 	  docType: req.body.docType,
// 	  docPath: req.body.docPath,
// 	  status: req.body.status
// 	}).then(empdoc => {
// 		// Send created employee to client
// 		res.send(empdoc);
// 	});
// };

//  exports.uploadEmpDoc = (empData) => {
// 	console.log("empData", JSON.parse(empData));
// 	var obj = JSON.parse(empData);
// 	// Save to MySQL database
// 	console.log("before insert",empData.empId);
// 	Empdoc.create({
// 	  empId: obj.empId,
// 	  docName: obj.docName,
// 	  docType: obj.docType,
// 	  docPath: obj.docPath,
// 	  status: obj.status
// 	}).then(empdoc => {
// 		// Send created employee to client
// 		//res.send(empData);
// 		console.log("after insert",empdoc);
// 	}).catch(function(err){console.log("asdsad",err)});
// };
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
