import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import '../CSS/adminForms/lawyerForm.css'
import axios from 'axios'

function LawyerForm() {

    const {
        register,
        handleSubmit,
        formState:{errors}
      } = useForm()

      const imageInput = useRef(null)

      const [fullNameError,setFullNameError] = useState(false)
      const [contactError,setContactError] = useState(false)

      const postInfo = async (data) => {
        try {
          await axios.post('http://localhost:5000/api/lawyers', data, {
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
        console.log(data)


        const dataForm = new FormData()
        dataForm.append('full_Name',data.fullName)
        imageInput.current.files[0] && dataForm.append('image',imageInput.current.files[0])
        dataForm.append('contact',data.contact)
        dataForm.append('details',data.details)
        postInfo(dataForm)
      }

      useEffect(() => {
        if (errors.fullName) {
            setFullNameError(true);
        }
        if (errors.contact) {
            setContactError(true);
        }
      }, [errors])

  return (
    <form className="LawyerForm" onSubmit={handleSubmit(onSubmit)} >
    <div className="lawyerThreeInput" >
    <div className="twoInput" >
  <div className=" inputGroup">
    <label htmlFor="fullName" className="form-label">სახელი და გვარი *</label>
    <input
      type="text"
      id="fullName"
      name="fullName"
      {...register('fullName',{required:true})}
      className={`lawyer-form-input ${fullNameError ?'lawyerInputErrorBorder':' lawyerInputBorder'} `}

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
      className={`lawyer-form-input ${contactError ?'lawyerInputErrorBorder':' lawyerInputBorder'} `}
      
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
