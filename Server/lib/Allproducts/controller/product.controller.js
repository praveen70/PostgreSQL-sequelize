"use strict";

var db = require('../../config/db.config');
var Product = db.product;

exports.create = function (req, res) {
    Product.create({

        "productName": req.body.productName,
        "price": req.body.price,
        "camera": req.body.camera,
        "battery": req.body.battery,
        "description": req.body.description,
        "categoryCategoryID": req.body.categoryCategoryID

    }).then(function (Products) {
        res.send(Products);
    });
};