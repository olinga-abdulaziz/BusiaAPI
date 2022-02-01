const express=require('express')
const { token, stkpush} =require('../controllers/mpesa')
const router=express.Router()


router.post('/stk/push',token,stkpush)

router.post('/callback',(req,res)=>{
    res.send(req.body)
})

router.get('/test',(req,res)=>{
    res.send('it works baaan')
})


module.exports=router

