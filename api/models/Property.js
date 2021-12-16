const mongoose=require("mongoose")

const propertySchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
    },phone:{
        type:String,
        require:true,
        unique:true,
        min:10
    },profileImg:{
        type:String,
        default:""
    },title:{
        type:String,
        min:10
    },price:{
        type:String
    },address:{
        type:String,
        max:30
    },desc:{
        type:String,
        max:30
    },

},{timestamps:true})

module.exports=mongoose.model("Property",propertySchema)