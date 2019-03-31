const http  = require('http');
const port = process.env.PORT || 3000;
const app  = require('./src/app');

const server = http.createServer(app);

if(server){
    server.listen(port);
    console.log(">>> SERVER . Listening to port : " +port)
}
