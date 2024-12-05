const Lawyer = require('../models/Lawyer')
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// const getLawyers = function (req, res) {
//   Lawyer.find()
//     .then((lawyers) => res.status(200).json(lawyers))
//     .catch((error) => res.status(500).json({ message: 'Error fetching lawyers' }))
// }

exports.getLawyers = catchAsync(async(req,res,next)=>{
  const doc = await Lawyer.find()

  res.status(200).json({
    status:'success',
    result:doc.length,
    data:doc
  })

})


exports.deleteLawyer = catchAsync(async(req,res,next)=>{

  const doc = await Lawyer.findByIdAndDelete(req.params.id)

  if(!doc){
    return next(new AppError('no document found with that id',404))
  }

  res.status(204).json({
    status:'success'
  })

})

exports.createLawyer = catchAsync(async(req,res,next)=>{
  
  const doc = await Lawyer.create(req.body)

  res.status(201).json({
    status:'succes',
    data:doc
  })

})

// module.exports = {
//   getLawyers
// }
