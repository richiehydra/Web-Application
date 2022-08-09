const mongoose=require("mongoose");
const db="mongodb+srv://DataBase:nmit99@cluster0.kvebt.mongodb.net/Web?retryWrites=true&w=majority";
mongoose.connect(db).then(()=>
{
    console.log("Succesfull Connection");
})
.catch((err)=>
{
    console.log("Connection Not succesfull")
    console.log(err);
})