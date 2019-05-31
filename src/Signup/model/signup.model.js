
module.exports = (sequelize, Sequelize) => {
    const Signup = sequelize.define('signup', {
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV1,
                primaryKey: true,
                allowNull: false
            
            },
            email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
              }
            },
            username: {
                type: Sequelize.STRING,
            },
            mobileNumber  : {
            type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING,
                allowNull:false
            
                 

            },
    },
    {
        timestamps:false    
    });
    
    return Signup;
  }
  
  