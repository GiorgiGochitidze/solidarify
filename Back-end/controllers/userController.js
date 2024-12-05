const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

require('dotenv').config();

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
  
  
    if (!email || !password) {
      return next(new AppError('please provide email and password', 400));
    }
  
    if(email != process.env.EMAIL && password != process.env.PASS ){
        return next(new AppError('incorrect email or password', 401));
    }
  
  
    res.status(200).json({
      status: 'success',
      token,
    });
    
  });