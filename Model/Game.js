const mongoose=require('mongoose')

const GameModel=new mongoose.Schema({
    week:{
        type:String,
        required:true
    },
    hometeam:{
        type:String,
        required:true
    },
    awayteam:{
        type:String,
        required:true
    },
    stadium:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    htr:{
        type:Number,
        required:false,
        default:0
    },
    atr:{
        type:Number,
        required:false,
        default:0
    },
    played:{
        type:Boolean,
        required:true,
        default:false
    }
})

module.exports=mongoose.model('Game',GameModel)