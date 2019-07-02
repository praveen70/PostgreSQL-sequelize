const db = require('../../config/db.config');
const Signin = db.signup;
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const env = require('../../config/env');


//signin function
exports.signin = (req, res) => {   
    Signin.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      console.log(user.email)
      if (!user) {
        return res.status(404).send('User Not Found.');
      }

      //comparing  stored password and user typed password with bcrypt lib 
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
     
      if (!passwordIsValid) {
        return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
      }
      
      var token = jwt.sign({ id: user.uuid },  env.SECRET_KEY, {
        expiresIn: 1440 // expires in 24 hours
      });
      
      res.status(200).send({ auth: true, accessToken: token });
      
    }).catch(err => {
      res.status(500).send('Error -> ' + err);
    });
  }
   

