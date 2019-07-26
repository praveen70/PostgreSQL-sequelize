module.exports = (sequelize, Sequelize) => {
	const File = sequelize.define('file', {
            id: {
                  type: Sequelize.UUID,
                  defaultValue: Sequelize.UUIDV1,
                  primaryKey: true,
              
              },
              type: {
                  type: Sequelize.STRING
                },
                fileName: {
                  type: Sequelize.STRING
                },
                originalName: {
                  type: Sequelize.STRING
                },
                docPath: {
                  type: Sequelize.STRING
                },
                path: {
                  type: Sequelize.STRING,
                },
                size: {
                  type: Sequelize.STRING,
                }

	});
	return File;
};
