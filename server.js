const express=require('express')
const dotenv=require('dotenv')
const routes=require('./routes/routes')
const mpesa=require('./routes/mpesa')
const dbconnection=require('./database/db')
const cors=require('cors')
const bodyparser=require('body-parser')


dotenv.config()
const app=express()

dbconnection()

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use(cors())
app.use(express.json())


app.use('/',routes)
app.use('/mpesa',mpesa)







const port=process.env.PORT || 8080
app.listen(port,()=>console.log(`server is listening on port ${port}`))
