const express = require("express");
const zod = require('zod');
const app =express();
app.use(express.json());

const schema = zod.array(zod.number());
app.post("/health-checkup",(req,res)=>{
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        console.log("Error");// you can res.send
    }
    res.send({
        response
    })
})
app.listen(3000);