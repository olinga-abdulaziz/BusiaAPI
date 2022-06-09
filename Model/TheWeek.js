const mongoose=require('mongoose')

const ThewekSchema=new mongoose.Schema({
    week:{
        type:Number,
        required:true
    },
})

module.exports=mongoose.model('TheWeek',ThewekSchema)