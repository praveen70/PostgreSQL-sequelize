module.exports = (sequelize, Sequelize) => {
    const mobileMi = sequelize.define('mobiles', {
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
    
    return mobileMi;
  }