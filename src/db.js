const mysql = require('mysql')

const dbConfig={
	host:'localhost',
	user:'root',
	password:'',
	database:'db_userprofile'
}

const connection = mysql.createConnection(dbConfig);
connection.connect((err)=>{
	if(err)throw err
	else console.log("Connected Successfully to database..")
})


module.exports=connection