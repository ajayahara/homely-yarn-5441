const mongoose=require("mongoose")

const cartSchema=mongoose.Schema({
    name:{type:String,required:true},
    actualPrice:{type:Number,required:true},
    offerPrice:{type:Number,required:true},
    image_url:{type:String,required:true},
    discount:{type:Number,required:true},
    category:{type:String,required:true},
    color:{type:String,required:true},
    gender:{type:String,required:true},
    qty:{type:Number,required:true},
    userID:String
},{
    versionKey:false
})

const CartModel=mongoose.model("cart",cartSchema)

module.exports={
    CartModel
}