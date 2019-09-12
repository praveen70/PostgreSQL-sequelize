module.exports = (sequelize, Sequelize) => {
    const Signin = sequelize.define('signin', {
        userID: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
            allowNull: false
        
        },   
        email: {
            type: Sequelize.STRING,
            },
            
            password: {
                type: Sequelize.STRING,
                
            },
    });
    
    return Signin;
  }