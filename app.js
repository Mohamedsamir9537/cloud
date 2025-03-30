const express = require('express')
const app =express()
app.use(express.static('./methods-public'))
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html '))
})
app.all('*',(req,res)=>{
    res.status(404).send(" resourse not found");
})




app.listen(5000,()=>{
    console.log(" i am listening on port 5000")
})