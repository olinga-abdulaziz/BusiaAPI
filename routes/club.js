const express= require('express')
const router=express.Router()
const Club=require('../Model/Club')

router.get('/clubs',async(req,res)=>{
    const clubs=await Club.find();
    res.json(clubs)
})

router.post('/add', async(req,res)=>{
    const club=new Club({
        clubname:req.body.clubname,
        abriviation:req.body.abriviation,
        home:req.body.home,
        stadium:req.body.stadium,
        description:req.body.description,
    })
    try {
        const saveClub=await club.save()
        res.json({'message':'Club Registered successfully'})
    } catch (err) {
        console.log(err);
    }
})




module.exports=router