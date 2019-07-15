const db = require('../../config/db.config');
const Category = db.categories;
const Product =  db.product;
//post 
exports.create= (req, res) => {
  console.log(req.body)

    Category.create({
    "categoryName": req.body.categoryName, 
    "groupGroupID" : req.body.groupGroupID
  
    
  })
  .then(category => {		
    res.send(category);
});


 
};

exports.findAll = (req, res) => {
    // console.log("req.body", req);
    Category.findAll(
      {
      include : [ Product ]
    }
    ).then(categories => {
      console.log(categories);
          //Send all CompanyMaster to Client
          res.json(categories);
      }).catch(err => {
          console.log(err);
          res.status(500).json({msg: "error", details: err});
        });
  };