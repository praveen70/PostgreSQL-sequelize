const db = require('../../config/db.config');
const Enum = db.enums;

exports.create = (req, res) => {
	Enum.create({
		clothesSize: req.body.clothesSize,
		shoesSize: req.body.shoesSize,
		jeansSize: req.body.jeansSize,
		quantity: req.body.quantity
	}).then((enums) => {
       	res.send(enums);
	});
};


exports.findAll = (req, res) => {
    return Enum.findAll()
        .then((enums) => {
            console.log(enums)
           res.json(enums);
          
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ msg: 'error', details: err });
        });
    };