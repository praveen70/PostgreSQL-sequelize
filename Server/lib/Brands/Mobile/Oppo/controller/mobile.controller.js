"use strict";

var db = require('../../../../config/db.config');
var Mobile = db.mobileOppo;
//post the user
exports.create = function (req, res) {
  if (!req.body.mobilesName) {
    throw new Error("Mobile Name Connot be Blank");
  }
  if (!req.body.price) {
    throw new Error("Mobile Name Connot be price");
  }
  if (!req.body.camera) {
    throw new Error("Mobile Name Connot be camera");
  }
  if (!req.body.battery) {
    throw new Error("Mobile Name Connot be battery");
  }
  if (!req.body.description) {
    throw new Error("Mobile Name Connot be description");
  } else {
    Mobile.create({
      "mobilesName": req.body.mobilesName,
      "price": req.body.price,
      "camera": req.body.camera,
      "battery": req.body.battery,
      "description": req.body.description,
      "mobileMiUuid": req.body.mobileMiUuid

    }).then(function (mobiles) {
      // Send created employee to client
      res.send(mobiles);
    });
  }
};

exports.findAll = function (req, res) {
  Mobile.findAll().then(function (mobiles) {
    //Send all CompanyMaster to Client
    res.json(mobiles);
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ msg: "error", details: err });
  });
};

//fetching all user 
//   exports.findAll = (req, res) => {
//   // console.log("req.body", req);
//   Mobile.findAll().then(mobiles => {
// 		//Send all CompanyMaster to Client
// 		res.json(mobiles);
// 	}).catch(err => {
//         console.log(err);
//         res.status(500).json({msg: "error", details: err});
//       });
// };

exports.findById = function (req, res) {
  Mobile.findByPk(req.params.id).then(function (mobiles) {
    res.json(mobiles);
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ msg: "error", details: err });
  });
};

// Update a User
exports.update = function (req, res) {
  var id = req.params.id;
  Mobile.update(req.body, { where: { uuid: id } }).then(function () {
    res.status(200).json({ mgs: "Updated Successfully -> User Id = " + id });
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ msg: "error", details: err });
  });
};

// Delete a User by Id
exports.delete = function (req, res) {
  var id = req.params.id;
  Mobile.destroy({
    where: { uuid: id }
  }).then(function () {
    res.status(200).json({ msg: 'Deleted Successfully -> Customer Id = ' + id });
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ msg: "error", details: err });
  });
};