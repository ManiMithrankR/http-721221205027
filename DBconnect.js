const mongoose =require('mongoose')
function DBconnect(){
    mongoose.connect("mongodb+srv://21ita27:TPYZPQc7vAyCxd82@cluster0.zoj5ikt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
        useNewUrlParser:true
    }).then((conn)=>{
        console.log("Connected To DB");
    }).catch((err)=>{
        console.log("Some Problem In Connection");
        console.log(err);
    })
}
module.exports=DBconnect;  