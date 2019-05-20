module.exports = (sequelize, Sequelize) => {
    const Signup = sequelize.define('signup', {
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV1,
                primaryKey: true
            },
            email: {
            type: Sequelize.STRING
            },
            mobileNumber  : {
            type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            confirmPassword: {
                type: Sequelize.STRING
            }
    });
    
    return Signup;
  }
  
  