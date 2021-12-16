const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        unique:true
    },email:{
        type:String,
        require:true,
        unique:true
    },password:{
        type:String,
        required:true,
        min:6
    },profileImg:{
        type:String,
        default:""
    },isAdmin:{
        type:Boolean,
        default:false
    },

},{timestamps:true})

module.exports=mongoose.model("User",userSchema)