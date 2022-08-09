const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },
    number:
    {
        type:Number,
        required:true
    },
    work:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true 
    },
    cpassword:
    {
        type:String,
        required:true 
    }
});

const Info=mongoose.model("Infos",UserSchema);
module.exports=Info;