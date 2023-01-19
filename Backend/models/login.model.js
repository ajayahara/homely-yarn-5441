const mongoose=require("mongoose")

const loginSchema=mongoose.Schema({
    mobile:Number,
    email:String,
    name:String,
    type:String,
    pwd:String
},{
    versionKey:false
})
const LoginModel=mongoose.model("login",loginSchema)

module.exports={
    LoginModel
}
