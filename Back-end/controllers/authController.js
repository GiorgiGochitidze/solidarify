const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.protect = catchAsync(async (req, res, next) => {
    // 1) Getting token and check of its there(if exists)
    let token;
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    } 
    
    if (!token) {
      return next(
        new AppError('Your are not logged in , Please log in to get access', 401),
      );
    }
  
    // 2) Verification(validation) of token
  
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  
    // 3) Check if user still exist
  
    if (!process.env.EMAIL == decoded.email || !process.env.PASS == decoded.password ){
      return next(
        new AppError('the user belonging to this token no longer exists', 404),
      );
    }
  
    // 4) Check if user changed password after the token was issued
  
    next();
  });