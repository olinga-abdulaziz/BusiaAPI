const express=require('express')
const router=express.Router()
const Member=require('../Model/Member')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const { auth,currentUser,checkuser} =require('../AuthControllers/authMiddleware')

router.get('/',(req,res)=>{
    res.json({'code':'FKFDATALINK@4040'})
})

router.post('/register',async (req,res)=>{

    // ecrypt password
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(req.body.password,salt)

    const member=new Member({
        names:req.body.names,
        phone:req.body.phone,
        email:req.body.email,
        password:hashedPassword,
    })

    try {
        const saveMember=await member.save()
        res.send('Registered successfully')
    } catch (err) {
        console.log(err);
    }
})

// router.post('/login', async(req,res)=>{
//     //comparing passoword and asign token
//     try {
//         //compare passowrd
//         const user=await Member.findOne({username:req.body.username})
//         if(user){
//             const credentials=await bcrypt.compare(req.body.password,user.password)
//         if(credentials){
//             // asign token
//             const token=jwt.sign({_id:user._id},process.env.SECRETE_KEY)
//             res.header('auth-token',token)
//             req.session.token=token
//             res.send('login successfully')
//         }else{
//             res.send('login failed')
//             return
//         }
//         }else{
//             res.send("no such user")
//         }
        
//     } catch (err) {
//         console.log(err);
//     }
// })

router.get('/logininfo',checkuser,currentUser,(req,res)=>{
    let ses=req.session.user
    if(ses){
        console.log(req.exist);
    }else{
        console.log("user has no session");
    }
    
})

router.get('/userinfo',currentUser,(req,res)=>{
    res.send(req.session.user)
})





module.exports=router