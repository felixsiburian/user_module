const {check}=require('express-validator/check')
const userRouter = require('express').Router()
const userController = require('../controller/users')

//register a new user
userRouter.post('/',
	[
		check('name').isLength({min:6}),
		check('email').isEmail(),
		check('password').isLength({min:6}),
		check('phone').isNumeric()
	],
	userController.registerUser)

module.exports = userRouter
