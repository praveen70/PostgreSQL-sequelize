"use strict";

var db = require('../../config/db.config');
var Category = db.categories;
var Product = db.product;
//post 
exports.create = function (req, res) {
  console.log(req.body);

  Category.create({
    "categoryName": req.body.categoryName,
    "groupGroupID": req.body.groupGroupID

  }).then(function (category) {
    res.send(category);
  });
};

exports.findAll = function (req, res) {
  // console.log("req.body", req);
  Category.findAll({
    include: [Product]
  }).then(function (categories) {
    console.log(categories);
    //Send all CompanyMaster to Client
    res.json(categories);
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ msg: "error", details: err });
  });
};