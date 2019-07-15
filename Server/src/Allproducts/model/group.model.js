module.exports = (sequelize, Sequelize) => {
    const groups = sequelize.define('groups', {
        GroupID: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
        
        },
        GroupName : {
            type: Sequelize.STRING,
            },
            
    },
    {
        timestamps:false    
    });

    groups.associate = function(models) {
        groups.hasMany(models.categories);
    };

    
    
    return groups;
  }

  