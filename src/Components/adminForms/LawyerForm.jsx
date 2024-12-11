import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import '../CSS/adminForms/lawyerForm.css'

function LawyerForm() {

    const {
        register,
        handleSubmit,
        formState:{errors}
      } = useForm()

      const imageInput = useRef(null)

      const [fullNameError,setFullNameError] = useState(false)
      const [contactError,setContactError] = useState(false)

      const onSubmit = (data) =>{
        console.log(data)


        const dataForm = new FormData()
        dataForm.append('fullName',data.title)
        imageInput.current.files[0] && dataForm.append('image',imageInput.current.files[0])
        dataForm.append('contact',data.src)
        data.details && dataForm.append('details',data.details)
        
        console.log(dataForm)
      }

      useEffect(() => {
        if (errors.fullName) {
            setFullNameError(true);
        }
        if (errors.contact) {
            setContactError(true);
        }
        console.log(errors);
      }, [errors])

  return (
    <form className="infoForm" onSubmit={handleSubmit(onSubmit)} >
    <div className="threeInput" >
    <div className="twoInput" >
  <div className=" inputGroup">
    <label htmlFor="fullName" className="form-label">სახელი და გვარი *</label>
    <input
      type="text"
      id="fullName"
      name="fullName"
      {...register('fullName',{required:true})}
      className={`form-input ${fullNameError && 'lawyerInputError'} `}

    />
    {fullNameError && <p className="lawyerError" >სახელი აუცილებელია</p>}
  </div>
  <div className=" inputGroup" >
    <label htmlFor="contact" className="form-label">საკონტაქტო *</label>
    <input
      type="text"
      id="contact"
      name="contact"
      {...register('contact',{required:true})}
      className={`form-input ${contactError && 'lawyerInputError'} `}
      
    />
    {contactError && <p className="lawyerError">საკონტაქტო აუცილებელია</p>}
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
    
  <div className=" inputGroup form-group">
    <label htmlFor="details" className="form-label">დეტალები</label>
    <textarea
      id="details"
      name="details"
      {...register('details')}
      className="form-textarea"
      rows="7"
      
    ></textarea>
  </div>
  <div className="submitBox" >
    <button type="submit" className="submit"  >დაპოსტვა</button>
  </div>
  </form>
  )
}

export default LawyerForm
