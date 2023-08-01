const mongoose=require("mongoose")

const contactSchema= new mongoose.Schema({
   yourname:{type:String},
   email:{type:String},
   message:{type:String}
})

const contactModel=mongoose.model("contact",contactSchema)

module.exports=contactModel