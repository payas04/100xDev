const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const adminexist = await Admin.findOne({
        username: username
    })
    if(adminexist){
        res.status(400).json({ 
            message:"Admin already exist"
        })
    }


    
    await Admin.create({
        username : username,
        password : password
    })
    res.json({
        message: "Admin created successfully"
    })

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const imagelink = req.body.imagelink

    const newcourse = await  Course.create({
        title,
        description,
        imagelink,
        price
        
    })

    res.json({
        message: "Course created successfully", 
        courseid: newcourse._id 
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
    res.json({
        course: response
    })

});

module.exports = router;