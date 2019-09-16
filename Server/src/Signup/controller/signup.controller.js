const db = require('../../config/db.config');
const Signup = db.signup;
const Role = db.role;
const Permission = db.permission;
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const env = require('../../config/env');
const Roles =  require('../../config/config')
const Op = db.Sequelize.Op;





//post the user
exports.create = (req, res) => {
  if (!req.body.email) {
    res.status(500).json({
      msg: "Email cannot be blank",
    });
    return;
  }
  if (!req.body.username) {
    res.status(500).json({
      msg: "Username cannot be blank",
    });
    return;
  }
  if (!req.body.mobileNumber) {
    res.status(500).json({
      msg: "MobileNumber cannot be balnk"
    });
    return;
  }
  if (!req.body.password) {
    res.status(500).json({
      msg: "password cannot be blank"
    });
    return false;
  } else if (req.body.password <= 4) {
    res.status(500).json({
      msg: "password cannot be less than 4 characters"
    });
    return false;
  }
  const userData = {
    "email": req.body.email,
    "username": req.body.username,
    "mobileNumber": req.body.mobileNumber,
    "password": bcrypt.hashSync(req.body.password, 8)

  }

  Signup.findOne({
      where: {
        email: req.body.email,

      }
    })
    .then(user => {
      if (!user) {
        // const hash = bcrypt.hashSync(userData.password, 10)
        // userData.password = hash
        Signup.create(userData)
          .then(user => {
          Role.create({
            "id": user.userID,
            "roleName": Roles.USER,
            "signupUserID" :  user.userID,
            
          })
            // role.findAll({
            //   where: {
            //     roleName: {
            //       roleName: req.body.roleName
            //     }
            //   }
            // }).then(roles => {
            //   user.setRoles(roles).then(() => {
            //     res.send("User registered successfully!");
            //   });
            // })
            let token = jwt.sign(user.dataValues, env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.json({
              token: token
            })
          })
          .catch(err => {
            res.send('error:' + err);
          })
      } else {
        res.json({
          error: 'User Already Exists'
        })
      }
    });
};




//fetching all user 
exports.findAll = (req, res) => {
  // console.log("req.body", req);
  Signup.findAll({
    include: [{
      model: Role,
      include: [{
        model: Permission,
      }]
    }]
  }
  
  ).then(signup => {

    res.json(signup);
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      msg: "error",
      details: err
    });
  });
};

exports.findById = (req, res) => {
  Signup.findByPk(req.params.id, {
      include: [{
        model: Role,
        include: [{
          model: Permission,
        }]
      }]
    
  }).then(signup => {
    res.json(signup);
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
  Signup.update(req.body, {
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
  Signup.destroy({
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


exports.userContent = (req, res) => {
	User.findOne({
		where: {id: req.userId},
		attributes: ['name', 'username', 'email'],
		include: [{
			model: Role,
			attributes: ['id', 'name'],
			through: {
				attributes: ['userId', 'roleId'],
			}
		}]
	}).then(user => {
		res.status(200).json({
			"description": "User Content Page",
			"user": user
		});
	}).catch(err => {
		res.status(500).json({
			"description": "Can not access User Page",
			"error": err
		});
	})
}