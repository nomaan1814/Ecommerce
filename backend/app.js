const express=require('express');
const app=express();
const connectDb=require('./config/db')
const cors=require('cors')
require('dotenv').config({path:`${__dirname}/../.env`});
connectDb();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const userRoutes=require('./routes/users/userRoutes');
app.get('/',(req,res)=>{
    res.send("Welcome")
})
app.use("/api/user",userRoutes)
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on ${process.env.PORT}`);
})