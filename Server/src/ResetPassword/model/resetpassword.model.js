module.exports = (sequelize, Sequelize) => {
    const ResetPassword = sequelize.define('resetpassword', {
            
        resetToken: {
            type: Sequelize.STRING,
            },
            
            password: {
                type: Sequelize.STRING,
                
            },
            confirmPassword: {
                type: Sequelize.STRING,
                
            },
    });
    
    return ResetPassword;
  }