const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');


exports.protect = catchAsync(async (req, res, next) => {
    // 1) Getting token and check of its there(if exists)
    let token;
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }else if(req.cookies.authToken){
      token = req.cookies.authToken
    }
    if (!token) {
      return next(
        new AppError('Your are not logged in , Please log in to get access', 401),
      );
    }
  
    // 2) Verification(validation) of token
    try{
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3) Check if user still exist
  
    if (!process.env.EMAIL == decoded.email || !process.env.PASS == decoded.password ){
      return next(
        new AppError('the user belonging to this token does not exists', 404),
      );
    }
  
    // 4) Check if user changed password after the token was issued
  
    next();

    }catch{

      return next(
        new AppError('Token is invalid or expired', 401),
      );

    }
  });

exports.verifyToken = catchAsync(async(req,res,next)=>{
  console.log(req.cookies)
  let token = req.cookies.authToken
  console.log(token)
  if(!token){
    res.status(200).json({
      status: 'failure',
      message: 'There is no token',
    });
  }
  
  try {
    // Promisify the jwt.verify method and verify the token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //   // If the token is valid, send a success response with decoded data
    res.status(200).json({
      status: 'success',
      message: 'Token is valid',
    });

  } catch (err) {
    // If the token is invalid or expired, throw an error
    res.status(200).json({
      status: 'failure',
      message: 'Token is not valid',
    });
  }


})