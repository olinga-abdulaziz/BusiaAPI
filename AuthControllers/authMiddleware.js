const jwt=require('jsonwebtoken')
const User=require('../Model/Member')

function auth(req,res,next){
    const token=req.header('auth-token')
    if(!token) return res.status(401).send('Access denied')

    try {
        const verified=jwt.verify(token,process.env.SECRETE_KEY
            )
        req.user=verified
        next()
    } catch (err) {
        res.status(400).send('Invalid token')
        console.log(err);
    }
}


const currentUser= async(req,res,next)=>{
    const token=req.session.token
    if(!token){
        res.status(401).send('Access denied')
        next()
    } 
    
    try {
        const decode=jwt.verify(token,process.env.SECRETE_KEY)
        var userId=decode._id
        let user=await User.findById(userId)
        if (user) {
            req.session.user=user
            next()
        }else{
            return
        }
        
    } catch (err) {
        res.status(400).send('Invalid token')
        console.log(err);
    }
}

const checkuser=(req,res,next)=>{
    const user=req.session.user
    if (user) {
        req.exist='yes'
        next()
    }else{
        req.exist='no'
        next()
    }
}


module.exports={currentUser,auth,checkuser}

