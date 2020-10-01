const express = require('express')
const app = express()

const PORT = process.env.PORT || 4321

app.get('/',(req,res)=>{
    res.send('Hello Guys!! This is a sample app deploy')
})

app.get('/app',(req,res)=>{
    res.send('Hey now you are in our main app')
})

app.listen(PORT,()=>{
    console.log('Server started at http://localhost:4321 ' + PORT)
})
