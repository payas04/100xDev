const express = require('express')
const app = express();

function kidneyValidation(req,res,next){
    const kidneyid = parseInt(req.query.kidneyid);
    if(kidneyid !== 1 && kidneyid !== 2){
        console.log("inside checking kidneys");
        res.status(403).json({
            msg: "Incorrect inputs for kidney"
        });
    }else{
        next();
    }      
}

function userValidation(req,res){
   const useridcheck = toString(req.headers.userid);
   const passwordcheck = toString(req.headers.password);
    if(useridcheck !== 'payas' || passwordcheck !== 'pass'){
        console.log("inside checking userid");
        res.status(403).json({
            msg: "Invalid username or password"
            
        });
    }   
      
}



app.get('/health-checkup',kidneyValidation,userValidation, (req,res)=>{
    res.send("You have Healthy Kidneys");
    console.log("inside main");
});

app.listen(4000);