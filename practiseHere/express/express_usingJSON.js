const express = require('express')
const app = express()
const port = 3000

app.get('/route-handler',(req,res)=>{
  console.log("Inside Route Handler")
  res.json({
    name: 'Payas',
    age: 23,
    address: "bla bla bla"
  })
})

app.get('/', (req, res) => {
  console.log ("reloaded ")
  res.send('Hello payas  how are you <br> first line <br> second line  <br> third line')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})