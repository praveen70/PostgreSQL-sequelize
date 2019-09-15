module.exports = (sequelize, Sequelize) => {
	const products = sequelize.define(
		'products',
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
			Processor: {
				type: Sequelize.STRING
			},
			price: {
				type: Sequelize.STRING
			},
			camera: {
				type: Sequelize.STRING
			},
			battery: {
				type: Sequelize.STRING
			},
			description: {
				type: Sequelize.STRING
			}
		},
		{
			timestamps: false,
			paranoid: true,
		}
    );

    // products.associate = function(models) {
    //     products.belongsTo(models.categories, { foreignKey: 'categoryCategoryID' , allowNull: false, });
    // };



	return products;
};
