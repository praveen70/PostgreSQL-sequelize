module.exports = (sequelize, Sequelize) => {
    const mobileOppo = sequelize.define('mobileOppo', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
            default: sequelize.fn('uuid_generate_v4')
        
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
            // camera : {
            //     type: Sequelize.STRING,  
            // },
            // desktopPcs : {
            //     type: Sequelize.STRING,  
            // },
            // smartWatches : {
            //     type: Sequelize.STRING,  
            // },
            // healthCareAppliances : {
            //     type: Sequelize.STRING,  
            // },
            // computerAccessories : {
            //     type: Sequelize.STRING,  
            // },
            // smartHomeAutomation: {
            //     type: Sequelize.STRING,  
            // },
            // networkComponents: {
            //     type: Sequelize.STRING,  
            // },
            // homeEntertainment: {
            //     type: Sequelize.STRING,  
            // },
            


            
    },
    {
        timestamps:false    
    });
    
    return mobileOppo;
  }