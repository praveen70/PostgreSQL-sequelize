	
module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define('roles', {
      roleID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      roleName: {
        type: Sequelize.STRING
      }
    }, {
      paranoid: true,
    });
    
    return Role;
  }