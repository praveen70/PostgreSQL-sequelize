module.exports = (sequelize, Sequelize) => {
	const categories = sequelize.define(
		'categories',
		{
			categoryID: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV1,
				primaryKey: true
			},
			categoryName: {
				type: Sequelize.STRING
			}
		},
		{
			timestamps: false,
			paranoid: true
		}
	);

	// categories.associate = function(models) {
	// 	categories.hasMany(models.products);
	// };
	// categories.associate = function(models) {
	// 	categories.hasMany(models.mobileaccessories, {foreignKey: 'categoryCategoryID', });
	// };

	// categories.associate = function(models) {
	// 	categories.belongsTo(models.groups, { foreignKey: 'groupGroupID', allowNull: false });
	// };

	return categories;
};
