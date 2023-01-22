const mongoose=require("mongoose")
require("dotenv").config()

const connection=mongoose.connect("mongodb+srv://ajaya:NEM_111_PROJECT@cluster0.fzkkbrk.mongodb.net/adolf?retryWrites=true&w=majority")


module.exports={
    connection
}