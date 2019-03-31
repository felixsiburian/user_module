const connection  = require('../db')
const userDAO = {

	insert:(email,name,password,phone)=>{
		const queryStr= "INSERT INTO tb_user(email,name,password,phone) VALUES (?,?,?,?)"
		return new Promise((resolve,reject)=>{
			connection.query(queryStr,[email,name,password,phone],(err,result)=>{
				if(err)reject(err)
				else resolve(result)
			})
		})
	}
}

module.exports= userDAO