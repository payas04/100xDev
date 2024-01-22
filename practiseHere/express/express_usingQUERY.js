const express = require('express');
const app = express();


function sum(n){
    let result=0;
    for (let i=1;i<=n;i++){
        result+=i;
        
    }
    return result;
}
app.get('/',(req,res)=>{
    const n  = req.query.n;
    res.send('Hi your answer is: '+sum(n).toString());
});

app.listen(3001);