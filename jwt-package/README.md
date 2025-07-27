A simple and minimalistic JWT authentication middleware for Node.js/Express applications. Easily integrate JWT authentication into your app with just a few lines of code.

Features: -

1. JWT Authentication: Validates JWT token from the Authorization header.

2. Easy to Use: Just include the middleware in your Express routes.

3. Error Handling: Proper error handling for missing or invalid tokens.



Installation : -  npm install jwt-boilerplate


Example code : -


const express = require('express');
const jwtAuth = require('jwt-boilerplate');  

const app = express();


const secretKey = 'your_secret_key';


app.use('/protected-route', jwtAuth(secretKey), (req, res) => {
  res.status(200).json({ message: 'You have access to this route' });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


Working: -

1 . jwt Token: the client sends a JWT token in the authorization header 
    
   ex - Authorization: Bearer <JWT_Token>


 2 . The middleware will check for the token, verify it using your secret key, and attach the decoded token to req.user if it's valid.
