const mongoose=require('mongoose')

const ClubSchema=mongoose.Schema({

    clubname:{
        type:String,
        required:true,
        uppercase:true
    },
    abriviation:{
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
    },
    p:{
        type:Number,
        required: true,
        default:0

    },
    w:{
        type:Number,
        required: true,
        default:0

    },
    d:{
        type:Number,
        required: true,
        default:0

    },
    l:{
        type:Number,
        required: true,
        default:0

    },
    f:{
        type:Number,
        required: true,
        default:0

    },
    gd:{
        type:Number,
        required: true,
        default:0

    },
    pts:{
        type:Number,
        required: true,
        default:0

    }
})

module.exports=mongoose.model('Club',ClubSchema)
