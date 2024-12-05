const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const jwt = require('jsonwebtoken');


require('dotenv').config();

const signToken = () =>{
    const email = process.env.EMAIL
    const password = process.env.PASS
    return jwt.sign({email,password},process.env.JWT_SECRET)
}

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
  
  
    if (!email || !password) {
      return next(new AppError('please provide email and password', 400));
    }
  
    if(email != process.env.EMAIL && password != process.env.PASS ){
        return next(new AppError('incorrect email or password', 401));
    }
  
    const token = signToken()
  
    res.status(200).json({
      status: 'success',
      token,
    });
    
  });