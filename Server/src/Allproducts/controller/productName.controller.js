const db = require('../../config/db.config');
const Productname = db.productName

exports.create = (req, res) => {
	console.log(req.body);
	
	Productname.create({
		productName: req.body.productName,
		categoryCategoryID: req.body.categoryCategoryID
	}).then((category) => {
		res.send(category);
	});
};
