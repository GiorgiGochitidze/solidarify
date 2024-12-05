const Info = require('../models/Info')
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
// const getInfos = function (req, res) {
//   Info.find()
//     .then((infos) => res.status(200).json(infos))
//     .catch((error) => res.status(500).json({ message: 'Error fetching infos' }))
// }

exports.getInfos = catchAsync(async(req,res,next)=>{
  const doc = await Info.find()

  res.status(200).json({
    status:'success',
    result:doc.length,
    data:doc
  })

})


exports.deleteInfo = catchAsync(async(req,res,next)=>{

  const doc = await Info.findByIdAndDelete(req.params.id)

  if(!doc){
    return next(new AppError('no document found with that id',404))
  }

  res.status(204).json({
    status:'success'
  })

})

exports.createInfo = catchAsync(async(req,res,next)=>{
  
  const doc = await Info.create(req.body)

  res.status(201).json({
    status:'succes',
    data:doc
  })

})

// module.exports = {
//   getInfos
// }
