const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
	host: env.host,
	dialect: env.dialect,
	operatorsAliases: false,
	pool: {
		max: env.max,
		min: env.pool.min,
		acquire: env.pool.acquire,
		idle: env.pool.idle
	}
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
// db.mobileOppo = require('../Brands/Mobile/Oppo/model/mobile.model')(sequelize, Sequelize);
// db.mobileVivo = require('../Brands/Mobile/vivo/model/vivo.model')(sequelize, Sequelize);
// db.mobileMi = require('../Brands/Mobile/Mi/model/mi.model')(sequelize, Sequelize);
// db.mobileAccessories = require('../Brands/MobileAccessories/model/mobileAccessories.model')(sequelize, Sequelize);
// db.hpDesktop = require('../Brands/Laptops/DesktopPc/Hp/model/hp.model')(sequelize, Sequelize);
db.signup = require('../Signup/model/signup.model')(sequelize, Sequelize);
db.signin = require('../Signin/model/signin.model')(sequelize, Sequelize);
db.file = require('../Fileupload/model/fileupload.model')(sequelize, Sequelize);
db.mobileAccessories = require('../Allproducts/model/mobileAccessories.model')(sequelize, Sequelize);
//db.files = require('../../app/model/file.model')(sequelize, Sequelize);

db.enums = require('../Allproducts/model/enum.model')(sequelize, Sequelize);
db.groups = require('../Allproducts/model/group.model')(sequelize, Sequelize);
db.categories = require('../Allproducts/model/category.model')(sequelize, Sequelize);
db.products = require('../Allproducts/model/product.model')(sequelize, Sequelize);
db.productName = require('../Allproducts/model/productName.model')(sequelize, Sequelize);

db.role= require('../Role/model/role.model')(sequelize, Sequelize);
db.permission = require('../Permission/model/permission.model')(sequelize, Sequelize);

Object.keys(db).forEach((key) => {
	if ('associate' in db[key]) {
		db[key].associate(db);
	}
});

// db.enums.belongsTo(db.products,  { foreignKey: 'productProductID' , allowNull: false, });
// db.products.hasMany(db.enums);

db.file.belongsTo(db.products, { foreignKey: 'productProductID', allowNull: false });
db.products.hasMany(db.file);
db.mobileAccessories.belongsTo(db.categories, { foreignKey: 'categoryCategoryID', allowNull: false });
db.categories.hasMany(db.mobileAccessories);
// db.products.belongsTo(db.categories, { foreignKey: 'categoryCategoryID', allowNull: false });
// db.categories.hasMany(db.products);


db.products.belongsTo(db.productName, { foreignKey: 'productnameProductnameID', allowNull: false });
db.productName.hasMany(db.products);

db.productName.belongsTo(db.categories, { foreignKey: 'categoryCategoryID', allowNull: false });
db.categories.hasMany(db.productName);

db.categories.belongsTo(db.groups, { foreignKey: 'groupGroupID', allowNull: false });
db.groups.hasMany(db.categories);


db.role.belongsTo(db.signup, { foreignKey: 'signupUserID', allowNull: false });
db.signup.hasMany(db.role);

db.permission.belongsTo(db.role, { foreignKey: 'roleRoleID', allowNull: false });
db.role.hasMany(db.permission);
module.exports = db;
