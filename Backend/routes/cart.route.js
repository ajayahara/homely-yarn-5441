const express=require("express")
const { CartModel } = require("../models/cart.model")

const cartRouter=express.Router()

cartRouter.get("/",async(req,res)=>{
    let userID=req.body.userID
    let data=await CartModel.find({userID})
    res.send(data)
})

cartRouter.post("/create",async(req,res)=>{
    let data=req.body
    try {
        let User=new CartModel(data)
        await User.save()
        res.send({"msg":"Added SuccessFully"})
    } catch (error) {
        res.send({error})
    }
})

cartRouter.patch("/modify/:id",async(req,res)=>{
    let id=req.params.id
    let data=req.body
    try {
        let userData=await CartModel.find({_id:id})
    if(userData[0].userID=data.userID){
        await CartModel.findByIdAndUpdate(id,data)
        res.send({"msg":"Updated Succesfully"})
    }else{
        res.send({"msg":"You cannot modify the data."})
    }
    } catch (error) {
        res.send({error})
    }
    
})

cartRouter.delete("/delete/:id",async(req,res)=>{
    let id=req.params.id
    try {
        
        let userData=await CartModel.find({_id:id})
        if(userData[0].userID==req.body.userID){
            await CartModel.findByIdAndDelete(id)
            res.send({"msg":"Deleted Succesfully."})
        }else{
            res.send({"msg":"You can't delete this route."})
        }
    } catch (error) {
        res.send({error})
    }
})

module.exports={
    cartRouter
}