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
	},

	findById:(id)=>{
		const queryStr = "SELECT * from tb_user WHERE id=?"
		return new Promise((resolve,reject)=>{
			connection.query(queryStr,[id],(err,result)=>{
				if(err)reject(err)
				else resolve(result)
			})
		});
	},

	updatePassword:(id,newPassword)=>{
		const queryStr="UPDATE tb_user SET password=? WHERE id=?"
		return new Promise((resolve,reject)=>{
			connection.query(queryStr,[newPassword,id],(err,result)=>{
				if(err)reject(err)
				else resolve(result)
			})
		})
	},

	updateProfile:(id,toUpdateObj)=>{
		
		let update_set = Object.keys(toUpdateObj).map(value=>{
       		return ` ${value}  = "${toUpdateObj[value]}"`;
    	});
		let queryStr = `UPDATE tb_user SET ${update_set.join(" ,")} WHERE id=?`
		
		console.log(queryStr)
		return new Promise((resolve,reject)=>{
			connection.query(queryStr,id,(err,result)=>{
				if(err)reject(err)
				else resolve(result)
			})
		})
	},

	findAll:()=>{
		const queryStr = "SELECT * from tb_user"
		return new Promise((resolve,reject)=>{
			connection.query(queryStr,(err,result)=>{
				if(result===undefined)reject(new Error("Undefined Result"));
				else resolve(result)
			})
		})
	}
}

module.exports= userDAO