const express= require('express')
const router=express.Router()
const Club=require('../Model/Club')
const Game=require('../Model/Game')
const Week = require('../Model/Week')


router.get('/clubs',async(req,res)=>{
    const clubs=await Club.find();
    res.json(clubs)
})

router.get('/club/:clubname',async(req,res)=>{
    const games=await Club.find({clubname:req.params.clubname})
    res.json(games)
})


router.post('/add-game',async(req,res)=>{
    const game=new Game({
        week:req.body.week,
        hometeam:req.body.hometeam,
        awayteam:req.body.awayteam,
        stadium:req.body.stadium,
        date:req.body.date,
        time:req.body.time,
        htr:req.body.htr,
        atr:req.body.atr,
    })

    try {
        const savegame=await game.save()
        res.json({'message':'Game Added successfully'})
    } catch (err) {
        console.log(err);
    }
})

router.get('/weeks',async(req,res)=>{
    const weeks=await Week.find();
    res.json(weeks)
})

router.get('/week/:week',async(req,res)=>{
    const games=await Game.find({week:req.params.week})
    res.json(games)
})

router.post('/add-week',async(req,res)=>{
    const week=new Week({
        week:req.body.week,
    })

    try {
        const saveweek=await week.save()
        res.json({'message':'Week Added successfully'})
    } catch (err) {
        console.log(err);
    }
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

// update table
router.put('/game-table/:clubname',async(req,res)=>{
    try {
        const results=await Club.updateOne({clubname:req.params.id},{$set:{p:req.body.p,w:req.body.w,d:req.body.d,l:req.body.l,f:req.body.f,gd:req.body.gd,pts:req.body.pts,ga:req.body.ga}})
        res.json({message:"Updated successfully"}) 
    } catch (err) {
        console.log(err);
    }
})


// update results
router.put('/game/:id',async(req,res)=>{
    try {
        const results=await Game.updateOne({_id:req.params.id},{$set:{htr:req.body.htr,atr:req.body.atr}})
        res.json({message:"Updated successfully"}) 
    } catch (err) {
        console.log(err);
    }
})



module.exports=router