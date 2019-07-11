# nodeAuthApiJwtToken
 This is an example of Creating a Node API with JWT's (json web tokens)

To run this example run following commands

npm install

node app.js // This command will run the express server at 5000 port

To test api's, run Postman

To generate token call login api and copy the token
http://localhost:5000/api/login

Then do a POST request and pass cpoied token in Authorization header

http://localhost:5000/api/post

header key : Authorization
       value: Bearer XXX
       
replace XXX with copied token value
 
