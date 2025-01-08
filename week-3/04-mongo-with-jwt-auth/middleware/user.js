const jwt = require('jsonwebtoken');
const secretKey = require('../config')

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
   try {
     const token = req.headers.authorization;
     const words = token.split(" ");
     const jwtToken = words[1];
     
     const decodedValue = jwt.verify(jwtToken,secretKey)
    req.auth = decodedValue;
     if(decodedValue.username){
         next();
     }
     else{
         res.status(403).json({
             msg: "You are not authenticated user"
         })
     }
 
   } catch (error) {
    res.status(403).json({
        msg: "Invalid token"
    })
   }

}

module.exports = userMiddleware;