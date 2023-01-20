const mongoose=require("mongoose")

const loginSchema=mongoose.Schema({
    mobile:{type:Number,required:true},
    email:{type:String,required:true},
    name:{type:String,required:true},
    type:{type:String,required:true},
    pwd:{type:String,required:true}
},{
    versionKey:false
})
const LoginModel=mongoose.model("login",loginSchema)

module.exports={
    LoginModel
}
