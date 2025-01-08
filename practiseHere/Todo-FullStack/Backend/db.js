const mongoose = require('mongoose');


//url: mongodb+srv://admin:6pgpEaU1FjIznX2o@cluster0.h9ftvjf.mongodb.net/
//will be in env as this is not secure 

mongoose.connect("mongodb+srv://admin:6pgpEaU1FjIznX2o@cluster0.h9ftvjf.mongodb.net/todos")
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed:{
        type: Boolean,
        default: false
    } 
})

const todo = mongoose.model("todos",todoSchema);
module.exports = {
    todo
}