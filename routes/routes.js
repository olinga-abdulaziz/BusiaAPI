const express=require('express')
const router=express.Router()


router.get('/',(req,res)=>{
    res.send('hello world it works walai ndio hii')
})


module.exports=router