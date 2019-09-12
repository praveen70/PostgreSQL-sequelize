	
module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define('permission', {
      permissionID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      postPermission: {
        type: Sequelize.STRING
      },
      getPermission: {
        type: Sequelize.STRING
      },
      getByIdPermission: {
        type: Sequelize.STRING
      },
      putPermission: {
        type: Sequelize.STRING
      },
      deletePermission: {
        type: Sequelize.STRING
      }
    });
    
    return Role;
  }