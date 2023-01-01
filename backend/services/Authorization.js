const jwt=require('jsonwebtoken');
class Authorization{
    async authorized(req,res,next){
          const headerToken=req.headers.authorization;
          if(headerToken){
             const token=headerToken.split('Bearer ')[1];
             const verified=await jwt.verify(token,process.env.JWT_KEY);
             if(verified){
                next();
             }
             else{
                return res.status(401).json({errors:[{msg:'Unauthorized'}]})
             }
          }
          else{
            return res.status(401).json({errors:[{msg:'Unauthorized'}]})
          }
    }
}
module.exports=new Authorization()