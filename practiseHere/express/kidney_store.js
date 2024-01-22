const express = require ('express');
const app = express();
app.use(express.json());
var users = [{
    name: "Payas",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]


app.get("/", (req, res) => {
   // const users[0].kidneys = users[0].kidneys;
    const  numberOfKidneys = users[0].kidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0 ; i< users[0].kidneys.length; i++){
        if (users[0].kidneys[i].healthy){
        numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
        // just for practise you could use numberOfUnhealthyKidneys = numerOfKidneys -  numberOfKidneys
    let numberOfUnhealthyKidneys = 0;
    for(let i = 0; i< users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            numberOfUnhealthyKidneys = numberOfUnhealthyKidneys + 1;
        }
    }


    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", (req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg:"Done !"
    });


})

app.put("/", (req,res)=>{
     for(i = 0; i< users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = 'true';
     }        
     res.json({msg: "all kidneys made healthy !"})

})

app.delete("/", (req,res)=> {
    const newKidneys = [];
    for(let i=0; i <users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push(users[0].kidneys[i]);
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "Unhealthy Kidneys Removed"})
})

app.listen(4000);