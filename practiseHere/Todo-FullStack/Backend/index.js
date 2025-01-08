const express = require('express');
const app = express();
app.use(express.json());
const {createSchema} = require('./types');
const {updateSchema} = require('./types');
const {todo} = require('./db');
const cors = require('cors');
app.use(cors({
    
})); 
const port = 3000;

app.post('/todo', async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createSchema.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({ 
            msg:"You entered wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo Created"
    })

})

app.get('/todos', async function(req,res){
    const allTodos = await todo.find({})
    res.json({
        allTodos
    })

}) 

app.put('/completed', async function(req,res){
    const updatePayload  = req.body;
    const parsedPayload = updateSchema.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(400).json({
            msg: parsedPayload.error      
        })
        return;
    }

    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo Updated"
    })
}) 

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})
