const env = {
    database: 'postgres',
    username: 'myuser',
    password: 'praveen6470',
    host: 'localhost',
    dialect: 'postgres',
    SECRET_KEY: 'asdasd64d6a4ds6asd',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };
  
  module.exports = env;