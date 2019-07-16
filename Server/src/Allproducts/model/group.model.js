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

    
   
        // groups.associate = function(models) {
        //   // associations can be defined here
        //   groups.belongsToMany(models.product, {
        //       through: {
        //           model: models.categories
        //       },
        //       foreignKey: 'groupGroupID'
        //   });
        // }
      

    return groups;
  };

  