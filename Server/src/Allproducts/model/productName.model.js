module.exports = (sequelize, Sequelize) => {
	const productname = sequelize.define(
		'productname',
		{
			productnameID: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV1,
				primaryKey: true
			},
			productName: {
				type: Sequelize.STRING
			},
		
		},
		{
			timestamps: false,
			paranoid: true,
		}
    );

   


	return productname;
};
