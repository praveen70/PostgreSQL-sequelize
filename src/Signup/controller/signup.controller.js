const db = require('../../config/db.config');
const Signup = db.signup;
 
// Post a Customer
exports.create = (req, res) => {  
  // Save to PostgreSQL database
  Signup.create({
        "email": req.body.email, 
        "mobileNumber": req.body.mobileNumber, 
        "password": req.body.password,
        "confirmPassword" : req.body.confirmPassword,
      }).then(signup => {    
      // Send created signup to client
      res.json(signup);
    }).catch(err => {
      console.log(err);
      res.status(500).json({msg: "error", details: err});
    });
};


//fetching all user 
  exports.findAll = (req, res) => {
	// console.log("req.body", req);
	Signup.findAll().then(signup => {
		//Send all CompanyMaster to Client
		res.json(signup);
	}).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
};

exports.findById = (req, res) => {  
    Signup.findByPk(req.params.id).then(signup => {
        res.json(signup);
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
  };

  // Update a User
exports.update = (req, res) => {
    const id = req.params.id;
    Signup.update( req.body, 
        { where: {id: id} }).then(() => {
          res.status(200).json( { mgs: "Updated Successfully -> User Id = " + id } );
        }).catch(err => {
          console.log(err);
          res.status(500).json({msg: "error", details: err});
        });
  };

  // Delete a User by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    Signup.destroy({
        where: { id: id }
      }).then(() => {
        res.status(200).json( { msg: 'Deleted Successfully -> Customer Id = ' + id } );
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
  };
  