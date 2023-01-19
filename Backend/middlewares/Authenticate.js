require("dotenv").config()
const jwt=require("jsonwebtoken")

const authenticate=(req,res,next)=>{
    const token=req.headers.authorization
    // console.log(token)
    if(token){
        try {
            const decoded=jwt.verify(token,process.env.key)
            req.body.userID=decoded.userID
            // console.log(decoded)
            // console.log(decoded)
                next()
        }
        catch (error) {
            console.log(error)
                res.send("Please Login First.")
        }
    }else{
        res.send("Please Login First.")
    }
}

module.exports={
    authenticate
}