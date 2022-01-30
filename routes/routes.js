const express=require('express')
const router=express.Router()
const Member=require('../Model/Member')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

router.get('/',(req,res)=>{
    res.send('hello world it works walai ndio hii')
})

router.post('/register',async (req,res)=>{

    // ecrypt password
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(req.body.password,salt)

    const member=new Member({
        fullname:req.body.fullname,
        phone:req.body.phone,
        username:req.body.username,
        password:hashedPassword,
    })

    try {
        const saveMember=await member.save()
        res.send('Registered successfully')
    } catch (err) {
        console.log(err);
    }
})

router.post('/login',async(req,res)=>{
    //comparing passoword and asign token
    try {
        //compare passowrd
        const user=await Member.findOne()
        const credentials=await bcrypt.compare(req.body.password,user.password)
        if(credentials){
            // asign token
            const token=jwt.sign({_id:user._id},process.env.SECRETE_KEY)
            res.header('auth-token',token)
            res.send('login successfully')
        }else{
            res.send('there is no such user')
            return
        }
    } catch (err) {
        console.log(err);
    }
})


module.exports=router