const dotenv=require('dotenv')
dotenv.config()
const axios=require ('axios')
const datetime=require('node-datetime')

const consumerkey=process.env.consumerKey
const consumerSecrete=process.env.consumerSecrete
const shortcode=process.env.shortcode
const passkey=process.env.passkey

const dt=datetime.create()
const timestamp=dt.format('YmdHMS')

password=()=>{
    const pass= shortcode + passkey + timestamp
    const base64pass=Buffer.from(pass).toString('base64')
    return base64pass
}

exports.token=(req,res,next) =>{
    const url='https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
    const Auth=
        Buffer.from(consumerkey + ':' + consumerSecrete).toString('base64')

    const headers={
        Authorization : 'Basic ' + Auth
    }

    axios.get(url, {
        headers :headers
    }).then( (response) =>{
        const data=response.data
        const access_token=data.access_token
        req.token=access_token
        next()
    })
    
}

exports.stkpush=(req,res) =>{
    const token=req.token

    const headers={
        Authorization: 'Bearer ' + token
    }

    const stkurl='https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'

    let data={
         
        "BusinessShortCode":shortcode,    
        "Password":password(),    
        "Timestamp":timestamp,    
        "TransactionType": "CustomerPayBillOnline",    
        "Amount":"10",    
        "PartyA":"254769210601",    
        "PartyB":"174379",    
        "PhoneNumber":"254769210601",    
        "CallBackURL":"https://192.168.6.112/mpesa/callback",    
        "AccountReference":"Abdula acc",    
        "TransactionDesc":"Lipanampesa"
    }

    axios.post(stkurl,data,{
        headers:headers
    }).then((response)=>{
        res.send(response.data)
    })
}


