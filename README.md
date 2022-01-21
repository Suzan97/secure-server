# secure-server
Creating an SSL server using Node.js

1.Create the server.js file

2.Create the node_modules and json packages
          npm init -y
          
3. Create the express package using 
         npm install express --save" on the terminal
         
4. Go to the server.js folder write your code for the server listener , certificate and key
5.  Create a cert folder  and enter it 
          cd cert

6. In order to generate your secure key and certificate use the following codes
          openssl genrsa -out key.pem
          openssl req -new -key key.pem -out csr.pem
          openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
        
7.Run the code  using https://127.0.0.1:8000
