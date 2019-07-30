const cat = require('./category.model');
module.exports = (sequelize,Sequelize) => {
	const Size = sequelize.define(
		'sizes',
		{
			sizeID: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV1,
				primaryKey: true
			},
			clothesSize: {
				type: Sequelize.ENUM,
				values: [ 'S', 'M', 'XL', 'XXL' ]
			},
			shoesSize: {
				type: Sequelize.ENUM,
				values: [ '6', '7', '8', '9', '10' ]
			},
			jeansSize: {
				type: Sequelize.ENUM,
				values: [ '30', '32', '34', '36', '38' ]
			},
			quantity: {
				type: Sequelize.ENUM,
				values: [ ' 100 g','125g', '3x125 g', '45 g, 100 g', '418g', '35 ml', '60 ml', '200 ml']
			}
		},
		{
			timestamps: false
		}
	);


	console.log("praven==>>>>",Size.rawAttributes.clothesSize.values);
	return Size;
};
