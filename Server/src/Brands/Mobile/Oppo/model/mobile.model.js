module.exports = (sequelize, Sequelize, DataTypes) => {
    const mobileOppo = sequelize.define('mobileOppo', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            // default: sequelize.fn('uuid_generate_v4')
        
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
            // miId : {
            //     type:Sequelize.UUID,
            // }
            
            


            
    },
    {
        timestamps:false    
    });
    mobileOppo.associate = function(models) {
       
        mobileOppo.belongsTo(models.mobileMi, { foreignKey: 'mobileMiUuid' , allowNull: false});
    };
    
    return mobileOppo;
  };