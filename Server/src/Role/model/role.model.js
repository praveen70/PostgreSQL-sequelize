	
module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define('roles', {
      // roleID: {
      //   type: Sequelize.INTEGER,
      //   primaryKey: true,
      //   allowNull: false,
      // },
      id: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      roleName: {
        type: Sequelize.STRING
      }
    }, {
      paranoid: true,
    });
    
    return Role;
  }