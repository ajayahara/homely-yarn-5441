const express=require("express")
const { LoginModel } = require("../models/login.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
require("dotenv").config()

const loginRouter=express.Router()

loginRouter.get("/",(req,res)=>{
    res.send("Hello World")
})

loginRouter.post("/adddetails",async(req,res)=>{
    let data=req.body
    try {
        
        let ata=await LoginModel.find({email:data.email})
        if(ata.length==0){
            bcrypt.hash(data.pwd,5,async(err,new_pass)=>{
            if(err){
                console.log(err)
            }else{
                await LoginModel.insertMany([{...data,pwd:new_pass}])
                res.send({"msg":"succesfully added"})
            }
        })
    }else{
        res.send({"msg":"Already Exist"})
    }
} catch (error) {
    res.send({error})
}
})

loginRouter.patch("/loginUser",async (req,res)=>{
    let data=req.body
    try {
        
        let ata=await LoginModel.find({email:data.email})
    if(ata.length!==0){
        bcrypt.compare(data.pwd,ata[0].pwd,(err,result)=>{
            if(result){
                const token=jwt.sign({userID:ata[0]._id},process.env.key)
                res.send({data:ata,token})
            }else{
                res.send({"msg":"Wrong Credentials"})
            }
        })
    }else{
        res.send({"msg":"No such user exist"})
    }
} catch (error) {
    res.send({error})
}
})

module.exports={
    loginRouter
}