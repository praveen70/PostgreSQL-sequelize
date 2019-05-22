


module.exports = (sequelize, Sequelize) => {
    const Signin = sequelize.define('signin', {
            
        username: {
            type: Sequelize.STRING,
            },
            
            password: {
                type: Sequelize.STRING,
                
            },
    });
    
    return Signin;
  }