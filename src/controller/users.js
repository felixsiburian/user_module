const {validationResult}=require('express-validator/check')
const userDAO = require("../dao/user")

const userController = {
	
	registerUser:(req,res)=>{
		const errors = validationResult(req)
		if(!errors.isEmpty()){
			return res.status(422).json({errors:errors.array()})
		}


		userDAO.insert(req.body.email, req.body.name, req.body.password, req.body.phone)
		.then((result)=>{
			res.json(result)
		})
		.catch((err)=>{
			res.json(err)
		})
	}
}
module.exports= userController
