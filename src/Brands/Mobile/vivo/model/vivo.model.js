module.exports = (sequelize, Sequelize) => {
    const Vivo = sequelize.define('mobiles', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
        
        },
        mobilesName : {
            type: Sequelize.STRING,
            },
            
            price: {
                type: Sequelize.STRING,    
            },
            camera: {
                type: Sequelize.STRING,  
            },
            battery: {
                type: Sequelize.STRING,    
            },
            description: {
                type: Sequelize.STRING,  
            },
            


            
    },
    {
        timestamps:false    
    });
    
    return Vivo;
  }