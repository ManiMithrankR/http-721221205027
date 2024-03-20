const mongoose=new("mongoose")

const ProductSchema=new mongoose.Schema({

    companyname:{
        type:String,
        required:[true,"companyname is require"],
        trim:true

    },

    ownername:{
        type:String,
        required:[true,"ownername is require"],
        trim:true

    },

    rollno:{
        type:Number,
        required:[true,"rollno is require"],
        trim:true

    },

    owneremail:{
        type:String,
        required:[true,"owneremail is require"],
        trim:true

    },
    
    accesscode:{
        type:String,
        required:[true,"companyname is require"],
        trim:true

    },



    email:{
        type:String,
        required:[true,"Email should contains @ [a-zA-Z0-9.-]{2,4}$/"]
    }
})
const ht=mongoose.model("ht",product);
module.exports=ht;