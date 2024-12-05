const Donation = require('../models/Donation')
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
// const getDonations = function (req, res) {
//   Donation.find()
//     .then((donations) => res.status(200).json(donations))
//     .catch((error) => res.status(500).json({ message: 'Error fetching donations' }))
// }

exports.getDonations = catchAsync(async(req,res,next)=>{
  const doc = await Donation.find()

  res.status(200).json({
    status:'success',
    result:doc.length,
    data:doc
  })

})


exports.deleteDonation = catchAsync(async(req,res,next)=>{

  const doc = await Donation.findByIdAndDelete(req.params.id)

  if(!doc){
    return next(new AppError('no document found with that id',404))
  }

  res.status(204).json({
    status:'success'
  })

})

exports.createDonation = catchAsync(async(req,res,next)=>{
  
  const doc = await Donation.create(req.body)

  res.status(201).json({
    status:'succes',
    data:doc
  })

})

// module.exports = {
//   getDonations
// }
