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

//update user password
userRouter.patch('/password/:id',
	[
		check('password').isLength({min:6})
	],
	userController.updateUserPassword)


//update user profile
userRouter.patch('/:id',
	[
	
	check('name').isLength({min:6}).optional(),
		
	check('email').isEmail().optional(),
		
	check('password').isLength({min:6}).optional(),

	check('phone').isNumeric().optional()

	],

	userController.updateUserProfile)

module.exports = userRouter
