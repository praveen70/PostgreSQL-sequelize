module.exports = (sequelize, Sequelize) => {
    const Signin = sequelize.define('signin', {
            
        email: {
            type: Sequelize.STRING,
            },
            
            password: {
                type: Sequelize.STRING,
                
            },
    });
    
    return Signin;
  }