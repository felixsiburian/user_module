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
	},

	updateUserPassword: (req,res)=>{
		const errors = validationResult(req)
		if(!errors.isEmpty()){
			return res.status(422).json({errors:errors.array()})
		}

		const userId = req.params.id
		const newPassword = req.body.password
		userDAO.updatePassword(userId,newPassword)
		.then((result)=>{
			res.json(result)
		})
		.catch((err)=>{
			res.json(err)
		})
	},

		updateUserProfile:(req,res)=>{
		const errors = validationResult(req)
		if(!errors.isEmpty()){
			return res.status(422).json({errors:errors.array()})
		}
		
		const userId = req.params.id
		const updateObj = req.body
		userDAO.updateProfile(userId,updateObj)
		.then((result)=>{
			res.json(result)
		})
		.catch((err)=>{
			res.json(err)
		})		
	},

	getUsers : (req,res)=>{
		userDAO.findAll()
		.then((result)=>{
			res.json(result)
		})
		.catch((err)=>{
			console.log(err)
		})
	}

}
module.exports= userController
