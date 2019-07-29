const db = require('../../config/db.config');
const Category = db.categories;
const Product = db.products;
const MobileAccessories = db.mobileAccessories;

//post
exports.create = (req, res) => {
	console.log(req.body);
	
	Category.create({
		categoryName: req.body.categoryName,
		groupGroupID: req.body.groupGroupID
	}).then((category) => {
		res.send(category);
	});
};

exports.findAll = (req, res) => {
		Category.findAll({
		include: [
			{
			  model: Product,
			//   include: [
			// 	{
			// 	  model: MobileAccessories
			// 	}
			//   ]
			},
			{
				model: MobileAccessories
			  }
		  ]
	})
		.then((categories) => {
			res.json(categories);
			return categories;
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ msg: 'error', details: err });
		});
};
