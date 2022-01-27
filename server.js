const express=require('express')
const dotenv=require('dotenv')

dotenv.config()
const app=express()


app.get('/',(req,res)=>{
    res.send("hello world")
})








const port=process.env.PORT || 8080
app.listen(port,()=>console.log(`server is listening on port ${port}`))
