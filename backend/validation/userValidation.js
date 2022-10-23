const {body}=require('express-validator')
module.exports.registerValidation=[
    body('name').not().isEmpty().trim().escape().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().trim().escape().withMessage('Email is required'),
    body('password').isLength({min:5}).withMessage('Password should be 5 characters long')
];
module.exports.loginValidation=[
    body('email').isEmail().normalizeEmail().trim().escape().withMessage('Email is required'),
    body('password').not().isEmpty().withMessage('Password is required')
];