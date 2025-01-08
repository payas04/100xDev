// Middleware for handling auth
const jwt = require("jsonwebtoken")
const secretKey = require('../config')
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const token = req.headers.authorization
        console.log({token});
        const words = token.split(" ");
        const jwtToken = words[1];
    
        const decodedValue = jwt.verify(jwtToken,secretKey);
       
    
        if(decodedValue.username){
            
            next();
        }
        else{
            res.status(403).json({
                msg: "You are not authenticated admin"
            })
        }
    } catch (error) {
        res.status(403).json({
            msg: "Invalid token"
        })
    }

}

module.exports = adminMiddleware;