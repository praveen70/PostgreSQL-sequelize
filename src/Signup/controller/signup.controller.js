const db = require('../../config/db.config');
const Signup = db.signup;
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

process.env.SECRET_KEY= 'asdasd64d6a4ds6asd'


//post the user
exports.create= (req, res) => {
  const userData = {
    "email": req.body.email, 
    "mobileNumber": req.body.mobileNumber, 
    "password": req.body.password,
    "confirmPassword" : req.body.password,
  }
  Signup.findOne({
    where: {
      email:req.body.email
    }
  })
  .then(user =>{
    if(!user){
      const hash = bcrypt.hashSync(userData.password, 10)
      userData.password = hash
      Signup.create(userData)
            .then(user => {
              let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,{expiresIn:1440})
              res.json({ token: token })
            })
            .catch(err => {
              res.send('error:' + err);
            })
    }else{
      res.json({ error: 'User Already Exists'})
    }
  });
};


// module.exports.findAll = (req, res) =>{
//   var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
//   console.log(decoded)

//   Signup.findOne({
//     where : {
//       id: decoded.id
//     }
//   })
//   .then(user =>{
//     if(user) {
//       res.json(user)
//     }else{
//       res.send('User does nor exists')
//     }
//   })
//   .catch(err  =>{
//     res.send('error:' + err)
//   });
// };

//fetching all user 
  exports.findAll = (req, res) => {
	// console.log("req.body", req);
	Signup.findAll().then(signup => {
		//Send all CompanyMaster to Client
		res.json(signup);
	}).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
};

exports.findById = (req, res) => {  
    Signup.findByPk(req.params.id).then(signup => {
        res.json(signup);
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
  };

  // Update a User
exports.update = (req, res) => {
    const id = req.params.id;
    Signup.update( req.body, 
        { where: {id: id} }).then(() => {
          res.status(200).json( { mgs: "Updated Successfully -> User Id = " + id } );
        }).catch(err => {
          console.log(err);
          res.status(500).json({msg: "error", details: err});
        });
  };

  // Delete a User by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    Signup.destroy({
        where: { id: id }
      }).then(() => {
        res.status(200).json( { msg: 'Deleted Successfully -> Customer Id = ' + id } );
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
  };
  