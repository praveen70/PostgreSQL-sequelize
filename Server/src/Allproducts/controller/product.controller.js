const db = require('../../config/db.config');
const Product = db.products;
const Files = db.file;



exports.create= (req, res) => {
    Product.create({

    "productName": req.body.productName,
    "productFullName" : req.body.productFullName, 
    "Processor" : req.body.Processor,
    "price": req.body.price,
    "camera": req.body.camera, 
    "battery": req.body.battery,
    "description": req.body.description,
    "productnameProductnameID" : req.body.productnameProductnameID
    
  })
  .then(Products => {		
    res.send(Products);
});


 
};


exports.findAll = (req, res) => {
  return Product.findAll({
    

      include: [
        {
          model: Files
        }
      ]
    
    
    })
      .then((Products) => {
         res.json(Products);
        return Products;     
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: 'error', details: err });
      });
  };