const db = require('../../config/db.config.js');
const File = db.file;

exports.uploadFile = (req, res, error) => {
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
			path: req.file.path,
			productProductID: req.body.productProductID
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

//  FETCH all
exports.findAll = (req, res) => {
	console.log('data');
	File.findAll()
		.then((files) => {
			// Send all customers to Client
			res.send(files);
		})
		.catch(function(err) {
			console.log(err);
		});
};

// // Find  by Id
exports.findById = (req, res) => {
	File.findByPk(req.params.id)
		.then((files) => {
			res.send(files);
		})
		.catch(function(err) {
			console.log(err);
		});
};

// Update by id
exports.update = (req, res) => {
	const id = req.params.id;
	console.log(req.body);
	console.log('req.params', req.params);
	File.update(
		{
			fileName: req.file.originalname,
			originalName: req.file.originalname,
			type: req.file.mimetype,
			docPath: req.file.destination,
			size: req.file.size,
			path: req.file.path
		},
		{ where: { id: req.params.id } }
	)
		.then(() => {
			res.status(200).send('updated successfully a customer with id = ' + id);
		})
		.catch(function(err) {
			console.log(err);
		});
};

// // // Delete by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	File.destroy({
		where: { id: id }
	})
		.then(() => {
			res.status(200).send('deleted successfully a customer with id = ' + id);
		})
		.catch(function(err) {
			console.log(err);
		});
};
