module.exports = (sequelize, Sequelize) => {
    const Electronic = sequelize.define('electronics', {
            
        mobiles : {
            type: Sequelize.STRING,
            },
            
            mobileAccessories: {
                type: Sequelize.STRING,    
            },
            laptop: {
                type: Sequelize.STRING,  
            },
            televisions: {
                type: Sequelize.STRING,    
            },
            tablets: {
                type: Sequelize.STRING,  
            },
            camera : {
                type: Sequelize.STRING,  
            },
            desktopPcs : {
                type: Sequelize.STRING,  
            },
            smartWatches : {
                type: Sequelize.STRING,  
            },
            healthCareAppliances : {
                type: Sequelize.STRING,  
            },
            computerAccessories : {
                type: Sequelize.STRING,  
            },
            smartHomeAutomation: {
                type: Sequelize.STRING,  
            },
            networkComponents: {
                type: Sequelize.STRING,  
            },
            homeEntertainment: {
                type: Sequelize.STRING,  
            },


            
    });
    
    return Electronic;
  }