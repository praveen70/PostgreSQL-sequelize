const db = require('../../../config/db.config');
const Mobile = db.mobile;

//post the user
exports.create= (req, res) => {
    Mobile.create({
    "mobilesName": req.body.mobilesName, 
    "price": req.body.price,
    "camera": req.body.camera, 
    "battery": req.body.battery,
    "description": req.body.description,
    
  })
  .then(mobiles => {		
    // Send created employee to client
    res.send(mobiles);
});
 
};


//fetching all user 
  exports.findAll = (req, res) => {
  // console.log("req.body", req);
  Mobile.findAll().then(mobiles => {
		//Send all CompanyMaster to Client
		res.json(mobiles);
	}).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
};

exports.findById = (req, res) => {  
    Mobile.findByPk(req.params.id).then(mobiles => {
        res.json(mobiles);
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
  };

  // Update a User
exports.update = (req, res) => {
    const id = req.params.id;
    Mobile.update( req.body, 
        { where: { uuid: id } }).then(() => {
          res.status(200).json( { mgs: "Updated Successfully -> User Id = " + id } );
        }).catch(err => {
          console.log(err);
          res.status(500).json({msg: "error", details: err});
        });
  };

  // Delete a User by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    Mobile.destroy({
        where: { uuid: id }
      }).then(() => {
        res.status(200).json( { msg: 'Deleted Successfully -> Customer Id = ' + id } );
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
  };
  
