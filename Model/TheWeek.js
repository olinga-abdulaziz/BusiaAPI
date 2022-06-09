const mongoose=require('mongoose')

const ThewekSchema=new mongoose.Schema({
    week:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model('Theweek',ThewekSchema)