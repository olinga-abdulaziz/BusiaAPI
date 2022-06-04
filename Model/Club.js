const mongoose=require('mongoose')

const ClubSchema=mongoose.Schema({
    clubname:{
        type:String,
        required:true,
        uppercase:true
    },
    home:{
        type:String,
        required:true,
        uppercase:true
    },
    stadium:{
        type:String,
        required:true,
        uppercase:true
    },
    description:{
        type:String,
        required:true,
        uppercase:true
    }
})

module.exports=mongoose.model('Club',ClubSchema)
