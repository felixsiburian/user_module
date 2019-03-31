const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const userRouter = require('./routes/user')

//POST request body parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//Cross Origin Rerource Sharing Handler
app.use((req,res,next)=>{
	res.header("Access-Control-Allow-Origin","*")
	res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept")
	next()
})

//Http Request Logger
app.use(morgan('dev'))


app.get('/',(req,res)=>{
    res.sendFile('./guide.html',{root:__dirname});
})

//User Router
app.use('/api/user',userRouter)




//This will pass error respon if there is no fitting route for incoming request
app.use((req,res,next)=>{
    const error = new Error('Page Not Found');
    error.status=404;
    next(error);
});


//This will get the passed error, then handle it to return only the return message instead of all error
app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    });
});




module.exports = app