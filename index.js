var express = require('express');
var app = express();
var cors = require("cors");
var router = express.Router();

var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json())

app.use(bodyParser.json({ type: 'application/*+json' }))


const db = require("./src/config/db.config");

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  
});

require('./src/Signup/route/signup.route')(app);
require('./src/Signin/route/signin.route')(app);
require('./src/Brands/Mobile/Oppo/route/mobile.route')(app);
require('./src/Brands/Mobile/vivo/route/vivo.route')(app);
require('./src/Brands/Mobile/Mi/route/mi.route')(app);

require('./src/Brands/MobileAccessories/route/mobileAccessories.route')(app);
require('./src/Brands/Laptops/DesktopPc/Hp/route/hp.route')(app);

 
// Create a Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
});
module.exports = router;