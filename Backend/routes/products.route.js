const express=require("express")
const { ProductModel } = require("../models/products.model")

const productRouter=express.Router()

productRouter.get("/get",async(req,res)=>{
    let query=req.query
    let data;
    try {
        
        if(query.color!==undefined && query.gender!=undefined){
            data=await ProductModel.find({$and:[{color:query.color},{gender:query.gender}]})
        }else if(query.gender!==undefined){
            data=await ProductModel.find({gender:query.gender})
        }else if(query.color!==undefined){
            data=await ProductModel.find({color:query.color})
        }else{
            data=await ProductModel.find()
        }
        res.send(data)
    } catch (error) {
        res.send({error})
    }
})

productRouter.get("/get/:id",async(req,res)=>{
    let id=req.params.id
    try {
        let data=await ProductModel.find({_id:id})
        res.send(data)
    } catch (error) {
        res.send({error})
    }
})

productRouter.post("/post",async(req,res)=>{
    let data=req.body
    try {
        let Product=new ProductModel(data)
        await Product.save()
        res.send({"msg":"Added Successfully."})
        
    } catch (error) {
        res.send({error})
    }
})

productRouter.delete("/delete/:id",async(req,res)=>{
    let id=req.params.id
    try {
        await ProductModel.findByIdAndDelete(id)
        res.send({"msg":"Deleted Successfully."})
    } catch (error) {
        res.send({error})
    }
})

module.exports={
    productRouter
}