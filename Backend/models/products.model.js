const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    name:String,
    actualPrice:String,
    offerPrice:String,
    Image:String,
    discount:String,
    color:String,
    gender:String
},{
    versionKey:false
})

const ProductModel=mongoose.model("products",productSchema)

module.exports={
    ProductModel
}