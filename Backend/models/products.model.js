const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    name:{type:String,required:true},
    actualPrice:{type:Number,required:true},
    offerPrice:{type:Number,required:true},
    Image:{type:String,required:true},
    discount:{type:Number,required:true},
    category:{type:String,required:true},
    color:{type:String,required:true},
    gender:{type:String,required:true}
},{
    versionKey:false
})

const ProductModel=mongoose.model("products",productSchema)

module.exports={
    ProductModel
}