var express = require('express');
var app = express();
var cors = require("cors");
var router = express.Router();
var cors = require('cors')

// const upload = require("express-fileupload")
const profile = require('./src/profile');
// const multer = require('multer');

// const upload = multer({
//   dest: 'images'
  
// });

// app.post('/upload', upload.single('upload'), (req, res, file) => {
//  console.log(req.file);
//   res.send();
// });

var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json())

global.__basedir = __dirname;

app.use(cors())

// app.use(upload());
app.use(bodyParser.json({ type: 'application/*+json' }))

app.use('/profile', profile)

const db = require("./src/config/db.config");

db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: true }');
  
}).catch(function(err) {
  console.log(err); 
});

require('./src/Signup/route/signup.route')(app);
require('./src/Signin/route/signin.route')(app);
// require('./src/Brands/Mobile/Mi/route/mi.route')(app);
// require('./src/Brands/Mobile/Oppo/route/mobile.route')(app);
// require('./src/Brands/Mobile/vivo/route/vivo.route')(app);
// require('./src/Brands/MobileAccessories/route/mobileAccessories.route')(app);
// require('./src/Brands/Laptops/DesktopPc/Hp/route/hp.route')(app);
require('./app/route/file.router')(app);
require('./src/Allproducts/route/enum.route')(app);
require('./src/Allproducts/route/group.route')(app);
require('./src/Allproducts/route/category.route')(app);
require('./src/Allproducts/route/product.route')(app);
require('./src/Allproducts/route/mobileAccessories.route')(app);

require('./src/Fileupload/route/fileupload.route')(app);
require('./src/Allproducts/route/productName.route')(app);

require('./src/Role/route/role.route')(app);
require('./src/Permission/route/permission.route')(app);

// Create a Server
var server = app.listen(8082, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("App listening at http://%s:%s", host, port);
});
module.exports = router;