const mongoose=require("mongoose")

const cartSchema=mongoose.Schema({
    name:String,
    actualPrice:String,
    offerPrice:String,
    Image:String,
    discount:String,
    color:String,
    gender:String,
    userID:String
},{
    versionKey:false
})

const CartModel=mongoose.model("cart",cartSchema)

module.exports={
    CartModel
}