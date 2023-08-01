const mongoose=require("mongoose")

const detailsSchema= new mongoose.Schema({
   name:{type:String},
   number:{type:Number}
})

const detailsModel=mongoose.model("details",detailsSchema)

module.exports=detailsModel