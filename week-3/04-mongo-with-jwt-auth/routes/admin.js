const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require('../db/index')
const secretKey  = require('../config')
const jwt = require('jsonwebtoken')
// Admin Routes
router.post('/signup', async(req, res) => {    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const adminexists = await Admin.findOne({
        username : username
    })
    if(!adminexists){
        const admin = await Admin.create({
            username,
            password
        })
        await admin.save()

        res.json({
            msg:"Admin Created",admin
        })
    }
    else{
        res.json({
            msg: "Admin already exists"
        })
    }
   
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    
    const adminexist = await Admin.findOne({
        username,
        password
    })
   console.log(secretKey)
    
    if(adminexist){
       const token = jwt.sign({
        username
       },secretKey)

       console.log({token})
       res.json({
        msg: token
       })
    }
    else{
        res.json({
            msg:"Admin not found"
        })
    }

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imagelink = req.body.imagelink;
    const price = req.body.price;
    
    const course = await Course.create({
        title,
        description,
        imagelink,
        price
    })

    res.json({
        msg : "Course created successfully",
        course
    })
});

router.get('/courses',async (req, res) => {
    // Implement fetching all courses logic
    const allcourses = await Course.find({})
    if(allcourses){
        res.json({
            allcourses
        })
    }
    else{
        res.json({
            msg: "No courses to list"
        })
    }

});

module.exports = router;