const mongoose = require('mongoose');
const { string } = require('zod');
// password: 6pgpEaU1FjIznX2o
// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:6pgpEaU1FjIznX2o@cluster0.h9ftvjf.mongodb.net/course_selling_app')

// Define schemas
const AdminSchema = new mongoose.Schema({
        username: String,
        password: String,
      
})

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]

});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description: String,
    imagelink: String,
    price: Number,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}