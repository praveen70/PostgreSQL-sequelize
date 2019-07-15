const db = require('../../config/db.config');
const Group = db.groups;
const categories = db.categories;
const Product =  db.product;
//post 
exports.create= (req, res) => {
    Group.create({
    "GroupName": req.body.GroupName, 
  })
  .then(groups => {		
    res.send(groups);
});


 
};


exports.findAll = (req, res) => {
    // console.log("req.body", req);
    Group.findAll({ 
      
      include : [categories] 
    }).then(groups => {
      console.log(groups);
          //Send all CompanyMaster to Client
          res.json(groups);
      }).catch(err => {
          console.log(err);
          res.status(500).json({msg: "error", details: err});
        });
  };