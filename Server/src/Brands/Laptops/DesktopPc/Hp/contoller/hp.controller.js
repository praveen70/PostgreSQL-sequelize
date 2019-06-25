const db = require('../../../../../config/db.config');
const hpDesktop = db.hpDesktop;

//post the user
exports.create= (req, res) => {
    hpDesktop.create({
    "desktopName": req.body.desktopName, 
    "specifications": req.body.specifications,
    "price" : req.body.price,
    "seller": req.body.seller, 
    "description": req.body.description,
    
  })
  .then(hpDesktop => {		
    // Send created mobileaccessories to client
    res.send(hpDesktop);
});
 
};


//fetching all mobileaccessories 
  exports.findAll = (req, res) => {
  // console.log("req.body", req);
  hpDesktop.findAll().then(hpDesktop => {
		//Send all CompanyMaster to Client
		res.json(hpDesktop);
	}).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
};

exports.findById = (req, res) => {  
    hpDesktop.findByPk(req.params.id).then(hpDesktop => {
        res.json(hpDesktop);
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
  };

  // Update a MobileAccessories
exports.update = (req, res) => {
    const id = req.params.id;
    hpDesktop.update( req.body, 
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
    hpDesktop.destroy({
        where: { uuid: id }
      }).then(() => {
        res.status(200).json( { msg: 'Deleted Successfully -> MobileAccessories Id = ' + id } );
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
  };
  
