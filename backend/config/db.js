const mongoose=require('mongoose');
const connectDb=async()=>{
      try {
        await mongoose.connect(process.env.database);
        console.log('Database connected')
      } catch (error) {
          console.log(error.message);
          process.exit;
      }
}
module.exports=connectDb;