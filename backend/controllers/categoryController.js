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
                 return res.status(201).json({message:'Your category has created successfully'})
            }else{
                return res.status(401).json({errors:[{msg:`${name} is already exist`}]})
            }
         }else{
            return res.status(401).json({errors:errors.array()})
         }
    }

    async categories(req,res){
        let page=req.params.page;
        let perPage=3;
        const skip=page-1*perPage;
        try {
            const count=await categoryModel.find({}).countDocuments();
            const response=await categoryModel.find({}).skip(skip).limit(perPage).sort({updatedAt:-1});
            return res.status(201).json({categories:response,perPage,count})
        } catch (error) {
            console.log(error.message);
        }
    }
}
module.exports=new category;