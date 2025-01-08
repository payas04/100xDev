const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken')
const secretKey = require('../config')

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const username= req.body.username
    const password= req.body.password

    const userexist = await User.findOne({
        username
    })

    if(userexist){
        res.json({
            msg: "User already exist"
        })
    }
    else{
        const user = await User.create({
            username, password

        })
        await user.save();
        res.json({
            msg:"User created"
        })
    }
    
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const userexist = await User.findOne({
        username,
        password
    })
    if(userexist){
        const token  = jwt.sign({
            username
        },secretKey)
        res.json({
            msg:token
        })

        }

    else{
        res.status(401).json({
            msg:"Incorrect Email / Password"
        })
    }

    
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allcourses = await Course.find({})
    res.json({
     allcourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.auth.username
    const courseId = req.params.courseId;
    
    const purchasecourseid = req.params.courseId
    const user = await User.findOne({
        username
    })

    user.puchasedCourses.push(courseId)

    await user.save()
    res.json({
        user
    })

});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.auth.username
    const user = await User.findOne({ username })
    res.json({
        purchasedCourses : user.puchasedCourses
    })

});

module.exports = router