const db = require('../../config/db.config');
const MobileAccessories = db.mobileAccessories;


//post 
exports.create= (req, res) => {
  console.log(req.body)

  MobileAccessories.create({
    "productName": req.body.productName, 
    "productFullName" : req.body.productFullName,
    "price": req.body.price,
    "services" :req.body.services,
    "highlights" : req.body.highlights,
    "seller" : req.body.seller,
    "description" : req.body.description,
    "Warranty" : req.body.Warranty,
    "categoryCategoryID" : req.body.categoryCategoryID    
  })
  .then(Accessories => {		
    res.send(Accessories);
});


 
};