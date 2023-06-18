process.env.UV_THREADPOOL_SIZE =  6;
const http = require('http');
const bcrypt = require('bcrypt');

http.createServer((req,res) => {
	bcrypt.hash('HELLLOOOOOOO',3).then(data => {
		// console.log("Hashed data",data);
		res.writeHead(200,{ 'Content-Type': 'text/plain'})
		res.write(data);
		res.end();
        	})
	}).listen(1337,()=> console.log('Listening on port 1337'));

    //Testing 100 concurrent request
    // ab -n 1000 -c 10 http://localhost:1337/ |grep Request 
