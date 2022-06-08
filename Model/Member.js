const mongoose=require('mongoose')


const MemberSchema=new mongoose.Schema({
    names:{
        type:String,
        required:true,
        uppercase:true
    },
    phone:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

})

module.exports=mongoose.model('Member',MemberSchema)