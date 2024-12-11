const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const jwt = require('jsonwebtoken');


require('dotenv').config();

const signToken = () =>{
    const email = process.env.EMAIL
    const password = process.env.PASS
    return jwt.sign({email,password},process.env.JWT_SECRET,{
      expiresIn: '1h' // Set an appropriate expiration
    })
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
  
    res.cookie('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
      sameSite: 'Strict', // Prevent CSRF
      maxAge: 60 * 60 * 1000, // 1-hour expiration
    });

    res.status(200).json({
      status: 'success',
      token,
    });
    
  });

  exports.logout = catchAsync(async (req, res, next) => {
    // Clear the authToken cookie
    res.clearCookie('authToken', {
      httpOnly: true, // Ensure the cookie can only be accessed by the server
      secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
      sameSite: 'Strict', // Prevent CSRF
    });
  
    res.status(200).json({
      status: 'success',
      message: 'You have been logged out.',
    });
  });