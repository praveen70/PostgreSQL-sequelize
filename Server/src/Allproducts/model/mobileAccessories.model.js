const cat = require('./category.model')
module.exports = (sequelize, Sequelize) => {
	const MobileAccessories = sequelize.define(
		'mobileAccessories',
		{
			productID: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV1,
				primaryKey: true
			},
			productName: {
				type: Sequelize.STRING
			},
			productFullName: {
				type: Sequelize.STRING
			},

			price: {
				type: Sequelize.STRING
			},
			services: {
				type: Sequelize.STRING
			},
			highlights: {
				type: Sequelize.STRING
            },
            seller: {
                type: Sequelize.STRING
            },
			description: {
				type: Sequelize.STRING
			},
			Warranty : {
				type: Sequelize.STRING
			}
		},
		{
			timestamps: false
		}
    );


    // MobileAccessories.associate = function(models) {
    //     MobileAccessories.belongsTo(models.categories, {foreignKey: 'categoryCategoryID',	 allowNull: false  });
    // };


	return MobileAccessories;
};
