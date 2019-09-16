const jwt = require('jsonwebtoken');
const config = require('../../config/env');
const db = require('../../config/db.config');

const Role = db.role;
const  configs = require('../../config/config')
const ROLEs = configs.ROLEs; 

checkDuplicateUserNameOrEmail = (req, res, next) => {
	// -> Check Username is already in use
	User.findOne({
		where: {
			username: req.body.username
		} 
	}).then(user => {
		if(user){
			res.status(400).send("Fail -> Username is already taken!");
			return;
		}
		
		// -> Check Email is already in use
		User.findOne({ 
			where: {
				email: req.body.email
			} 
		}).then(user => {
			if(user){
				res.status(400).send("Fail -> Email is already in use!");
				return;
			}
				
			next();
		});
	});
}

verifyToken = (req, res, next) => {
	let token = req.headers['x-access-token'];
  
	if (!token){
		return res.status(403).send({ 
			auth: false, message: 'No token provided.' 
		});
	}

	jwt.verify(token, config.secret, (err, decoded) => {
		if (err){
			return res.status(500).send({ 
					auth: false, 
					message: 'Fail to Authentication. Error -> ' + err 
				});
		}
		req.userId = decoded.id;
		next();
	});
}



checkRolesExisted = (req, res, next) => {
	console.log(req.body.roleName.length)	
	for(let i=0; i<req.body.roleName.length; i++){
		if(!ROLEs.includes(req.body.roleName[i].toUpperCase())){
			res.status(400).send("Fail -> Does NOT exist Role = " + req.body.roles[i]);
			return;
		}
	}
	next();
}

const authJwt = {};
authJwt.	verifyToken = verifyToken;
authJwt.checkRolesExisted = checkRolesExisted;



module.exports = authJwt;