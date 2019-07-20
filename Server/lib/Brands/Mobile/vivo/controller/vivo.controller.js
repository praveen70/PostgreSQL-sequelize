"use strict";

var db = require('../../../../config/db.config');
var MobileVivo = db.mobileVivo;
var MobileOppo = db.mobileOppo;

//post the user
exports.create = function (req, res) {
  MobileVivo.create({
    "mobilesName": req.body.mobilesName,
    "price": req.body.price,
    "camera": req.body.camera,
    "battery": req.body.battery,
    "description": req.body.description

  }).then(function (mobiles) {
    // Send created employee to client
    res.send(mobiles);
  });
};
//fetching all user 
exports.findAll = async function (req, res) {
  // console.log("req.body", req);
  await MobileVivo.findAll({
    include: [{
      model: MobileOppo
    }]

  }).then(function (mobiles) {
    //Send all CompanyMaster to Client
    res.json(mobiles);
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({
      msg: "error",
      details: err
    });
  });
};

// //fetching all user 
//   exports.findAll = (req, res) => {
//   // console.log("req.body", req);
//   MobileVivo.findAll().then(mobiles => {
// 		//Send all CompanyMaster to Client
// 		res.json(mobiles);
// 	}).catch(err => {
//         console.log(err);
//         res.status(500).json({msg: "error", details: err});
//       });
// };

exports.findById = function (req, res) {
  MobileVivo.findByPk(req.params.id).then(function (mobiles) {
    res.json(mobiles);
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({
      msg: "error",
      details: err
    });
  });
};

// Update a User
exports.update = function (req, res) {
  var id = req.params.id;
  MobileVivo.update(req.body, {
    where: {
      uuid: id
    }
  }).then(function () {
    res.status(200).json({
      mgs: "Updated Successfully -> User Id = " + id
    });
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({
      msg: "error",
      details: err
    });
  });
};

// Delete a User by Id
exports.delete = function (req, res) {
  var id = req.params.id;
  MobileVivo.destroy({
    where: {
      uuid: id
    }
  }).then(function () {
    res.status(200).json({
      msg: 'Deleted Successfully -> Customer Id = ' + id
    });
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({
      msg: "error",
      details: err
    });
  });
};