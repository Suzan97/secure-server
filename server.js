//creating server parameters
const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');


const app = express()

app.use('/', (req,res,next) =>{
    res.send("Hello from SSL server");
})
// certificate and key
const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
},app)
// server to listen
sslServer.listen(8000, () => console.log('Secure server on port 8000'));
