var express = require('express');
var app = express();
var cors = require("cors");
var router = express.Router();

var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json())

app.use(bodyParser.json({ type: 'application/*+json' }))





const db = require("./src/config/db.config");

db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: true }');
  
});

require('./src/Signup/route/signup.route')(app);
require('./src/Signin/route/signin.route')(app);

 
// Create a Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
});
module.exports = router;