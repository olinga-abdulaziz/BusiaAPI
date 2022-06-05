const mongoose=require('mongoose')

const WeekModel=new mongoose.Schema({
    week:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model('Week',WeekModel)