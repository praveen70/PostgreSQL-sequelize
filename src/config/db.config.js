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
db.signup = require('../Signup/model/signup.model')(sequelize, Sequelize);
db.signin = require('../Signin/model/signin.model')(sequelize, Sequelize);
db.mobileOppo = require('../Brands/Mobile/Oppo/model/mobile.model')(sequelize, Sequelize);
db.mobileVivo = require('../Brands/Mobile/vivo/model/vivo.model')(sequelize, Sequelize);
db.mobileMi = require('../Brands/Mobile/Mi/model/mi.model')(sequelize, Sequelize);
db.mobileAccessories = require('../Brands/MobileAccessories/model/mobileAccessories.model')(sequelize, Sequelize);
module.exports = db;