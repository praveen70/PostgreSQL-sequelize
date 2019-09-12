const db = require('../../config/db.config');
const Role = db.role;


//post the user
exports.create= (req, res) => {

    Role.create({
      "roleID" : req.body.roleID,
    "roleName": req.body.roleName,
    "signupUserID" : req.body.signupUserID
    
  })
  .then(roles => {		
    // Send created employee to client
    res.send(roles);
});

};


//fetching all user 
  exports.findAll = (req, res) => {
  Role.findAll().then(roles => {
    console.log(roles);
		res.json(roles);
	}).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
};

// exports.findById = (req, res) => {  
//     MobileMi.findByPk(req.params.id).then(mobiles => {
//         res.json(mobiles);
//       }).catch(err => {
//         console.log(err);
//         res.status(500).json({msg: "error", details: err});
//       });
//   };

//   // Update a User
// exports.update = (req, res) => {
//     const id = req.params.id;
//     MobileMi.update( req.body, 
//         { where: { uuid: id } }).then(() => {
//           res.status(200).json( { mgs: "Updated Successfully -> User Id = " + id } );
//         }).catch(err => {
//           console.log(err);
//           res.status(500).json({msg: "error", details: err});
//         });
//   };

//   // Delete a User by Id
// exports.delete = (req, res) => {
//     const id = req.params.id;
//     MobileMi.destroy({
//         where: { uuid: id }
//       }).then(() => {
//         res.status(200).json( { msg: 'Deleted Successfully -> Customer Id = ' + id } );
//       }).catch(err => {
//         console.log(err);
//         res.status(500).json({msg: "error", details: err});
//       });
//   };
  


  