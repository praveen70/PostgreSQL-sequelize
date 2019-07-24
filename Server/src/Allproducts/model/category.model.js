module.exports = (sequelize, Sequelize) => {
    const categories = sequelize.define('categories', {
        categoryID: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
        
        },
        categoryName : {
            type: Sequelize.STRING,
            },          
    },
    {
        timestamps:false    
    });

    categories.associate = function(models) {
        categories.belongsTo(models.groups, { foreignKey: 'groupGroupID' , allowNull: false});
    };
    
    categories.associate = function(models) {
        categories.hasMany(models.products);
    };

    // categories.associate = function(models) {
    //     categories.hasOne(models.mobileAccessories);
    // };

    // categories.associate = (models) => {
    //     categories.belongsToMany(models.mobileaccessories, {
    //       through: 'mobileaccessories',
    //       foreignKey: 'categoryCategoryID'
    //     });
    //   };
    
 
    // categories.associate =function(models) {
    //       //associations can be defined here
    //       categories.belongsToMany(models.groups, {
    //           through: {
    //               model: models.categories
    //           },
    //           foreignKey: 'categoryID'
    //       });
    //     };
      
    return categories;
  };