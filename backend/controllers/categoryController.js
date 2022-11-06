const {validationResult}=require('express-validator')
const categoryModel=require('../models/category');
class category{
    async create(req,res){
         const errors=validationResult(req);
         if(errors.isEmpty()){
            const {name}=req.body;
            const exist=await categoryModel.findOne({name});
            if(!exist){
                 await categoryModel.create({name});
                 return res.status(201).json({message:'Category has created'})
            }else{
                return res.status(401).json({errors:[{msg:`${name} is already exist`}]})
            }
         }else{
            return res.status(401).json({errors:errors.array()})
         }
    }
}
module.exports=new category;