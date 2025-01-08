const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:6pgpEaU1FjIznX2o@cluster0.h9ftvjf.mongodb.net/course_selling_app_Jwt').then(()=>{console.log("DB connected");
});

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String 
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    puchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'  
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imagelink: String,
    price: Number

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}