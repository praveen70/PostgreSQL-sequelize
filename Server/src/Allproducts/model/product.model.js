module.exports = (sequelize, Sequelize) => {
	const Product = sequelize.define(
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
			timestamps: false
		}
    );

    Product.associate = function(models) {
        Product.belongsTo(models.categories, { foreignKey: 'categoryCategoryID' , allowNull: false, });
    };



	return Product;
};
