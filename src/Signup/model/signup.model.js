var md5 = require('md5');

module.exports = (sequelize, Sequelize) => {
    const Signup = sequelize.define('signup', {
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV1,
                primaryKey: true,
            
            },
            email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
              }
            },
            mobileNumber  : {
            type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING,
                len: { 
                    args: [7, 42],
                    msg: "The password length should be between 7 and 42 characters."
                 },
                 set (pass, key) {
                    // `key` is "password" here
                    this.setDataValue(key, md5(pass));
                 }

            },
            confirmPassword: {
                type: Sequelize.STRING
            }
    },
    {
        timestamps:false    
    });
    
    return Signup;
  }
  
  