const express=require('express');
const router=express.Router();
const { registerUser, loginUser } = require('../../controllers/userController');
const { registerValidation, loginValidation } = require('../../validation/userValidation');

router.post("/register",registerValidation,registerUser)
router.post("/login",loginValidation,loginUser)
module.exports=router;