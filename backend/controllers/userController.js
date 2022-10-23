const {validationResult}=require('express-validator');

const userModel=require('../models/user');
const { hashedPassword, generateToken, matchpassword } = require('../services/authServices');

module.exports.registerUser=async(req,res)=>{
    const errors=validationResult(req)
    if(errors.isEmpty()){
      const {name,email,password}=req.body;
      
      try {
         const emailExist=await userModel.findOne({email});
         if(!emailExist){
            const hashed =await hashedPassword(password);
            const user=await userModel.create({name,email,password:hashed});
            const token=generateToken({id:user._id,name:user.name})
            return res.status(201).json({msg:'Your Account has been created',token});
         }
         else{
            return res.status(401).json({
                errors:[{msg:`${email} already in use`}]
            })//unauthorized
         }
      } catch (error) {
          return res.status(500).json('Server Internal error')
        //   return res.status(500).json({error:error.message})
      }
    }
    else{
        return res.status(400).json({
            errors:errors.array()
        })
    }
}

module.exports.loginUser=async(req,res)=>{
    const {email,password}=req.body;
    let errors=validationResult(req);
    if(errors.isEmpty()){
         try {
             const user = await userModel.findOne({email});
             if(user && await matchpassword(``+password,user.password)){
                   const token=generateToken({id:user._id,name:user.name});
                   if(user.admin){
                        return res.status(201).json({
                            token,
                            admin:true
                        })
                   }
                   else{
                    return res.status(201).json({
                        token,
                        admin:false
                    })
                   }
             }
             else{
                return res.status(401).json({
                    errors:[{msg:`Invalid credentials`}]
                })
             }
         } catch (error) {
            console.log(error.message);
             return res.status(500).json('Server Internal error')
         }
    }else{
        return res.status(400).json({
            errors:errors.array()
        })
    }
}