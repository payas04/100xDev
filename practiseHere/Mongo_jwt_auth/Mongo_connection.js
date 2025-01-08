const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
mongoose.connect('mongodb+srv://payas:P%40yas108@cluster0.5xivhgh.mongodb.net/userapp');
const User = mongoose.model('users',{ 
    name : String,
    email : String,
    password: String
});
app.post('/signin',async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const userExists = await User.findOne({email : email});

    if(userExists){
        return res.status(400).send("User Already Exist");
    }
            const user = new User( { 
            name:name,
            email: email,
            password: password
            });
        User.save();
})
app.listen(3000);