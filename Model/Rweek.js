const mongoose=require('mongoose')

const RweekSchema=new mongoose.Schema({
    week:{
        type:Number,
        required:true,
    },
})

module.exports=mongoose.model('Rweek',RweekSchema)