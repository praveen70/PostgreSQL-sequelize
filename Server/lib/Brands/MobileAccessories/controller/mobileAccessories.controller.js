"use strict";

var db = require('../../../config/db.config');
var mobileAccessories = db.mobileAccessories;

//post the user
exports.create = function (req, res) {
  mobileAccessories.create({
    "mobileCasesName": req.body.mobileCasesName,
    "specifications": req.body.specifications,
    "price": req.body.price,
    "seller": req.body.seller,
    "description": req.body.description

  }).then(function (mobileaccessories) {
    // Send created mobileaccessories to client
    res.send(mobileaccessories);
  });
};

//fetching all mobileaccessories 
exports.findAll = function (req, res) {
  // console.log("req.body", req);
  mobileAccessories.findAll().then(function (mobileaccessories) {
    //Send all CompanyMaster to Client
    res.json(mobileaccessories);
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ msg: "error", details: err });
  });
};

exports.findById = function (req, res) {
  mobileAccessories.findByPk(req.params.id).then(function (mobileaccessories) {
    res.json(mobileaccessories);
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ msg: "error", details: err });
  });
};

// Update a MobileAccessories
exports.update = function (req, res) {
  var id = req.params.id;
  mobileAccessories.update(req.body, { where: { uuid: id } }).then(function () {
    res.status(200).json({ mgs: "Updated Successfully -> MobileAccessories Id = " + id });
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ msg: "error", details: err });
  });
};

// Delete a MobileAccessories by Id
exports.delete = function (req, res) {
  var id = req.params.id;
  mobileAccessories.destroy({
    where: { uuid: id }
  }).then(function () {
    res.status(200).json({ msg: 'Deleted Successfully -> MobileAccessories Id = ' + id });
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ msg: "error", details: err });
  });
};