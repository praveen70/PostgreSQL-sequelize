const db = require('../../../../config/db.config');
const MobileVivo = db.mobileVivo;
const MobileOppo = db.mobileOppo;

//post the user
exports.create = (req, res) => {
  MobileVivo.create({
      "mobilesName": req.body.mobilesName,
      "price": req.body.price,
      "camera": req.body.camera,
      "battery": req.body.battery,
      "description": req.body.description,

    })
    .then(mobiles => {
      // Send created employee to client
      res.send(mobiles);
    });

};
//fetching all user 
exports.findAll = async (req, res) => {
  // console.log("req.body", req);
  await MobileVivo.findAll({
    include: [{
      model: MobileOppo
    }]

  }).then(mobiles => {
    //Send all CompanyMaster to Client
    res.json(mobiles);
  }).catch(err => {
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

exports.findById = (req, res) => {
  MobileVivo.findByPk(req.params.id).then(mobiles => {
    res.json(mobiles);
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      msg: "error",
      details: err
    });
  });
};

// Update a User
exports.update = (req, res) => {
  const id = req.params.id;
  MobileVivo.update(req.body, {
    where: {
      uuid: id
    }
  }).then(() => {
    res.status(200).json({
      mgs: "Updated Successfully -> User Id = " + id
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      msg: "error",
      details: err
    });
  });
};

// Delete a User by Id
exports.delete = (req, res) => {
  const id = req.params.id;
  MobileVivo.destroy({
    where: {
      uuid: id
    }
  }).then(() => {
    res.status(200).json({
      msg: 'Deleted Successfully -> Customer Id = ' + id
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      msg: "error",
      details: err
    });
  });
};