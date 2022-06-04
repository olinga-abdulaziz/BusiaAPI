const express=require('express')
const dotenv=require('dotenv')
const auth=require('./routes/auth')
const mpesa=require('./routes/mpesa')
const dbconnection=require('./database/db')
const cors=require('cors')
const bodyparser=require('body-parser')
const session=require('express-session')
const router=require('./routes/club')

dotenv.config()
const app=express()

dbconnection()

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use(cors())
app.use(express.json())

app.use(session({secret: 'mySecret', resave: false, saveUninitialized: false}));

app.use('/auth',auth)
app.use('/mpesa',mpesa)
app.use('/club',router)







const port=process.env.PORT || 8080
app.listen(port,()=>console.log(`server is listening on port ${port}`))
