const db = require('../../config/db.config');
const Permission = db.permission;


//post the user
exports.create = (req, res) => {
    Permission.create({
            "postPermission": req.body.postPermission,
            "getPermission": req.body.getPermission,
            "getByIdPermission": req.body.getByIdPermission,
            "putPermission": req.body.putPermission,
            "deletePermission": req.body.deletePermission,
            "roleRoleID" : req.body.roleRoleID
        })
        .then(Permissions => {
            res.send(Permissions);
        });

};


//fetching all user 
//   exports.findAll = (req, res) => {
//   Role.findAll().then(roles => {
//     console.log(roles);
// 		res.json(roles);
// 	}).catch(err => {
//         console.log(err);
//         res.status(500).json({msg: "error", details: err});
//       });
// };