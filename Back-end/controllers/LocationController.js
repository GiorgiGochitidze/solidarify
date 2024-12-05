const Location = require('../models/Location')
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// const getLocations = function (req, res) {
//   Location.find()
//     .then((locations) => res.status(200).json(locations))
//     .catch((error) => res.status(500).json({ message: 'Error fetching locations' }))
// }

exports.getLocations = catchAsync(async(req,res,next)=>{
  const doc = await Location.find()

  res.status(200).json({
    status:'success',
    result:doc.length,
    data:doc
  })

})

exports.deleteLocation = catchAsync(async(req,res,next)=>{

  const doc = await Location.findByIdAndDelete(req.params.id)

  if(!doc){
    return next(new AppError('no document found with that id',404))
  }

  res.status(204).json({
    status:'success'
  })

})

exports.createLocation = catchAsync(async(req,res,next)=>{
  
  const doc = await Location.create(req.body)

  res.status(201).json({
    status:'succes',
    data:doc
  })

})

// module.exports = {
//   getLocations
// }
