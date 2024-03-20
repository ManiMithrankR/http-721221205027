const product=require("product")

exports.company=async(req,res)=>{
    try {
        const ht=await product.find()
        res.status(201).json({
            Form
        })
    } catch (error) {
        res.send(error)
    }
}
exports.owner=async(req,res)=>{
    try{
            const ht= await product.findById(req.params.id)
            res.status(201).json({
                Form
            })
    }catch(error){
            res.send(error)
    }
}
exports.no=async(req,res)=>{
    try{
            const ht= await product.create(req.body)
            res.status(201).json({
                msg:"Created",
                data:Form
                })
        }catch(error){
                res.send(error)
        }
}
exports.email=async(req,res)=>{
    try{
            const ht= await product.findByIdAndUpdate(req.params.id)
            res.status(201).json({
                updateForm
            })
    }catch(error){
            res.status(400).json({
                status:"Fail",
                msg:error
            })
    }
}
exports.access=async(req,res)=>{
    try{
            const ht= await product.findByIdAndDelete(req.params.id)
            res.status(201).json({
                msg:"Deleted",
                deleteForm
            })
    }catch(error){
        res.status(400).json({
            status:"Fail",
            msg:error
        })
    }
}