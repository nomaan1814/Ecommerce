const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
module.exports.hashedPassword=async (password)=>{
    const salt=await bcrypt.genSalt(10);
    const hashed=await bcrypt.hash(password,salt);
    return hashed;
}
module.exports.generateToken=(user)=>{
    const token=jwt.sign(user,process.env.JWT_KEY,{
        expiresIn:'7d'
    })
    return token;
}
module.exports.matchpassword=async(password,dbpassword)=>{
    return await bcrypt.compare(password,dbpassword);
}