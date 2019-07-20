"use strict";

var db = require('../../config/db.config');
var Group = db.groups;
var categories = db.categories;
var Product = db.product;
//post 
exports.create = function (req, res) {
    Group.create({
        "GroupName": req.body.GroupName
    }).then(function (groups) {
        res.send(groups);
    });
};

exports.findAll = function (req, res) {
    // console.log("req.body", req);
    Group.findAll({

        include: [categories]
    }).then(function (groups) {
        console.log(groups);
        //Send all CompanyMaster to Client
        res.json(groups);
    }).catch(function (err) {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};