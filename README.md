# secure-server
Creating an SSL server using Node.js

Create the server.js file
Create the node_modules and json packages using the terminal by typing "npm init -y"
Create the express package using  "npm install express --save" on the terminal
Go to the server.js folder write your code for the server listener , certificate and key
Create a cert folder cd cert
In order to generate your secure key and certificate use the following codes
        openssl genrsa -out key.pem
        openssl req -new -key key.pem -out csr.pem
        openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
        
Run the code using https://127.0.0.1:8000
