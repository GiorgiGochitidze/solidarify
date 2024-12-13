import { useForm } from "react-hook-form"
import '../CSS/adminForms/infoForm.css'
import { useEffect, useRef, useState } from "react"
import axios from "axios"

function InfoForm() {

    const {
        register,
        handleSubmit,
        formState:{errors}
      } = useForm()

      const imageInput = useRef(null)

      const [titleError,setTitleError] = useState(false)
      const [srcError,setSrcError] = useState(false)
      const [detailsError,setDetailsError] = useState(false)

      const postInfo = async (data) => {
        try {
          await axios.post('http://localhost:5000/api/infos', data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          });
        } catch (err) {
          console.log(err);
        }
      }

      const onSubmit = (data) =>{

        setDetailsError(false)
        setTitleError(false)
        setSrcError(false)

        const dataForm = new FormData()
        dataForm.append('title',data.title)
        imageInput.current.files[0] && dataForm.append('image',imageInput.current.files[0])
        dataForm.append('src',data.src)
        dataForm.append('details',data.details)
        postInfo(dataForm)
        
      }


      useEffect(()=>{
        if(errors.title){
            setTitleError(true)
        }
        if(errors.src){
            setSrcError(true)
        }
        if(errors.title){
            setDetailsError(true)
        }
      },[errors])


  return (
      <form className="infoForm" onSubmit={handleSubmit(onSubmit)} >
        <div className="infoThreeInput" >
        <div className="infoTwoInput" >
      <div className=" infoInputGroup">
        <label htmlFor="title" className="form-label">სათაური *</label>
        <input
          type="text"
          id="title"
          name="title"
          {...register('title',{required:true})}
          className={`info-form-input ${titleError?' infoInputErrorBorder ': ' infoInputBorder '} `}

        />
        {titleError && <p className="infoError" >სათაური აუცილებელია</p>}
      </div>
      <div className=" infoInputGroup" >
        <label htmlFor="src" className="form-label">წყარო *</label>
        <input
          type="text"
          id="src"
          name="src"
          {...register('src',{required:true})}
          className={`info-form-input ${srcError?' infoInputErrorBorder ': ' infoInputBorder '} `}
          
        />
        {srcError && <p className="infoError">წყარო აუცილებელია</p>}
      </div>
      </div>

      <div>
        <label htmlFor="image" className="form-label">სურათი</label>
        <div className="formImageBox" onClick={()=>{imageInput?.current.click()}} >
            აირჩიე ფოტო
        <input
          type="file"
          id="image"
          name="image"
          className="imageInput"
          ref={imageInput}
        />
        </div>
      </div>
      </div>
        
      <div className=" infoInputGroup form-group">
        <label htmlFor="details" className="form-label">დეტალები *</label>
        <textarea
          id="details"
          name="details"
          {...register('details',{required:true})}
          className={` info-form-textarea ${detailsError?' infoInputErrorBorder ': ' infoInputBorder '} `}
          rows="7"
          
        ></textarea>
                {detailsError && <p className="infoError" >დეტალები აუცილებელია</p>}
      </div>
      <div className="submitBox" >
        <button type="submit" className="submit"  >დაპოსტვა</button>
      </div>
      </form>
  )
}

export default InfoForm
