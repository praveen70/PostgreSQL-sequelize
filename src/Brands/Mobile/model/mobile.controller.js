module.exports = (sequelize, Sequelize) => {
    const Brands = sequelize.define('brand', {
            
        username: {
            type: Sequelize.STRING,
            },
            
            password: {
                type: Sequelize.STRING,
                
            },
    });
    
    return Signin;
  }