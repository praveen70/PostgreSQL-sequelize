const db = require('../../../config/db.config');
const mobileAccessories = db.mobileAccessories;

//post the user
exports.create= (req, res) => {
    mobileAccessories.create({
    "mobileCasesName": req.body.mobileCasesName, 
    "specifications": req.body.specifications,
    "price" : req.body.price,
    "seller": req.body.seller, 
    "description": req.body.description,
    
  })
  .then(mobileaccessories => {		
    // Send created mobileaccessories to client
    res.send(mobileaccessories);
});
 
};


//fetching all mobileaccessories 
  exports.findAll = (req, res) => {
  // console.log("req.body", req);
  mobileAccessories.findAll().then(mobileaccessories => {
		//Send all CompanyMaster to Client
		res.json(mobileaccessories);
	}).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
};

exports.findById = (req, res) => {  
    mobileAccessories.findByPk(req.params.id).then(mobileaccessories => {
        res.json(mobileaccessories);
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
  };

  // Update a MobileAccessories
exports.update = (req, res) => {
    const id = req.params.id;
    mobileAccessories.update( req.body, 
        { where: { uuid: id } }).then(() => {
          res.status(200).json( { mgs: "Updated Successfully -> MobileAccessories Id = " + id } );
        }).catch(err => {
          console.log(err);
          res.status(500).json({msg: "error", details: err});
        });
  };

  // Delete a MobileAccessories by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    mobileAccessories.destroy({
        where: { uuid: id }
      }).then(() => {
        res.status(200).json( { msg: 'Deleted Successfully -> MobileAccessories Id = ' + id } );
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
  };
  
