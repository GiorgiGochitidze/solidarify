const multer = require('multer');
const Info = require('../models/Info')
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const cloudinary = require('cloudinary').v2


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


const storage = multer.memoryStorage(); // Store files in memory (or use diskStorage for file uploads)
const upload = multer({ storage });
exports.createInfo =[upload.single('image'),catchAsync(async(req,res,next)=>{
  
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
  const doc = await Info.create(data)


  res.status(201).json({
    status:'succes',
    data:doc
  })

})
]

// module.exports = {
//   getInfos
// }
