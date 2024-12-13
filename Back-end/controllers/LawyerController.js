const multer = require('multer');
const Lawyer = require('../models/Lawyer')
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const cloudinary = require('cloudinary').v2

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

const storage = multer.memoryStorage(); // Store files in memory (or use diskStorage for file uploads)
const upload = multer({ storage });

exports.createLawyer = [upload.single('image'),catchAsync(async(req,res,next)=>{

  const data = {...req.body}

  if(req.file){
  cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
  })
  
  const results = await new Promise((resolve,reject)=>{
    const uploadStream = cloudinary.uploader.upload_stream(
      {resource_type:'auto'},
      (error,result) =>{
        if(error){
          reject(error)
        }else{
          resolve(result)
        }
      }
    )
    uploadStream.end(req.file.buffer)
  })
  data.image = results.secure_url
  }
  
  const doc = await Lawyer.create(data)

  res.status(201).json({
    status:'succes',
    data:doc
  })

})]

// module.exports = {
//   getLawyers
// }
