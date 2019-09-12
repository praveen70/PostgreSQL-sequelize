
module.exports = (sequelize, Sequelize) => {
    const Signup = sequelize.define('signup', {
            userID: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV1,
                primaryKey: true,
                allowNull: false
            
            },
            email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                notNull: {
                    msg: 'Please enter your email'
                  }
                  
              }
            },
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                  notNull: {
                    msg: 'Please enter your username'
                  }
                }
                
            },
            mobileNumber  : {
            type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING,
                allowNull:false,
                validate: {
                    notNull: {
                      msg: 'Please enter your password'
                    }
                  }
            
                 

            },
            
    },
    {
        timestamps:false    
    },
    
    // {

    //     getterMethods: {
    //                 fullName:function() {
    //                   return this.getDataValue('FirstName')+ ' ' + this.getDataValue('MiddileName')+ ' ' + this.getDataValue('LastName')
    //                 }
    //               }
    //             }
    );
    
    return Signup;
  }
  

//   const Model = Sequelize.Model;
//  class Signup extends Model {}
// Signup.init({
//   // attributes
//   uuid: {
//     type: Sequelize.UUID,
//     defaultValue: Sequelize.UUIDV1,
//     primaryKey: true,
//     allowNull: false

// },
// email: {
// type: Sequelize.STRING,
// validate: {
//     isEmail: true
//   }
// },
// username: {
//     type: Sequelize.STRING,
// },
// mobileNumber  : {
// type: Sequelize.STRING
// },
// password: {
//     type: Sequelize.STRING,
//     allowNull:false

     

// }
// }, {
//   sequelize,
//   modelName: 'user'
//   // options
// });
  
// module.exports = Signup;