"use strict";

var db = require('../../../../../config/db.config');
var hpDesktop = db.hpDesktop;

//post the user
exports.create = function (req, res) {
  hpDesktop.create({
    "desktopName": req.body.desktopName,
    "specifications": req.body.specifications,
    "price": req.body.price,
    "seller": req.body.seller,
    "description": req.body.description

  }).then(function (hpDesktop) {
    // Send created mobileaccessories to client
    res.send(hpDesktop);
  });
};

//fetching all mobileaccessories 
exports.findAll = function (req, res) {
  // console.log("req.body", req);
  hpDesktop.findAll().then(function (hpDesktop) {
    //Send all CompanyMaster to Client
    res.json(hpDesktop);
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ msg: "error", details: err });
  });
};

exports.findById = function (req, res) {
  hpDesktop.findByPk(req.params.id).then(function (hpDesktop) {
    res.json(hpDesktop);
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ msg: "error", details: err });
  });
};

// Update a MobileAccessories
exports.update = function (req, res) {
  var id = req.params.id;
  hpDesktop.update(req.body, { where: { uuid: id } }).then(function () {
    res.status(200).json({ mgs: "Updated Successfully -> MobileAccessories Id = " + id });
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ msg: "error", details: err });
  });
};

// Delete a MobileAccessories by Id
exports.delete = function (req, res) {
  var id = req.params.id;
  hpDesktop.destroy({
    where: { uuid: id }
  }).then(function () {
    res.status(200).json({ msg: 'Deleted Successfully -> MobileAccessories Id = ' + id });
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ msg: "error", details: err });
  });
};