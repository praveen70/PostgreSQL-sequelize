const db = require('../../config/db.config');
const Group = db.groups;
const categories = db.categories;
// const Product =  db.product;
const cat = require('./category.controller');
const Product = require('./product.controller');

exports.create = (req, res) => {
	Group.create({
		GroupName: req.body.GroupName
	}).then((groups) => {
		res.send(groups);
	});
};

exports.findAll = (req, res) => {
	Group.findAll({
		include: [ categories ]
	})
		.then((groups) => {
			Product.findAll().then((data) => {
				let obj = {
					groups:groups,	
					products:data
				};
        		//let allData = groups.concat(data); 
				// let allData = groups.concat(data);
				res.json(obj);
				console.log('126582222222222222222222222222', obj);
			});

			// res.json(groups);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ msg: 'error', details: err });
		});
};
