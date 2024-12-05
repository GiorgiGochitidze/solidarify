const Missing = require('../models/Missing')
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// const getMissingPersons = function (req, res) {
//   Missing.find()
//     .then((persons) => res.status(200).json(persons))
//     .catch((error) => res.status(500).json({ message: 'Error fetching missing persons' }))
// }

exports.getMissingPersons = catchAsync(async(req,res,next)=>{
  const doc = await Missing.find()

  res.status(200).json({
    status:'success',
    result:doc.length,
    data:doc
  })

})

exports.deleteMissing = catchAsync(async(req,res,next)=>{

  const doc = await Missing.findByIdAndDelete(req.params.id)

  if(!doc){
    return next(new AppError('no document found with that id',404))
  }

  res.status(204).json({
    status:'success'
  })

})

exports.createMissing = catchAsync(async(req,res,next)=>{
  
  const doc = await Missing.create(req.body)

  res.status(201).json({
    status:'succes',
    data:doc
  })

})

// module.exports = {
//   getMissingPersons
// }
