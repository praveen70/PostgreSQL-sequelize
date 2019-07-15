const db = require('../../config/db.config');
const Product = db.product;



exports.create= (req, res) => {
    Product.create({

    "productName": req.body.productName, 
    "price": req.body.price,
    "camera": req.body.camera, 
    "battery": req.body.battery,
    "description": req.body.description,
    "categoryCategoryID" : req.body.categoryCategoryID
    
  })
  .then(Products => {		
    res.send(Products);
});


 
};
