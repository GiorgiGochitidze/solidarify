import axios from 'axios';
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import '../CSS/adminForms/donationForm.css'

function DonationForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const [donationError, setDonationError] = useState(false);
    
      const postData = async (data) => {
        try {
          await axios.post("http://localhost:5000/api/donations", {
            donationReport:data.donationReport
          },{
            withCredentials:true
          });
        } catch (err) {
          console.log(err)
        }
      };
    
      const onSubmit = (data) => {
        console.log(data);
        setDonationError(false);
        postData(data)
      };
    
      useEffect(() => {
        if (errors.donationReport) {
            setDonationError(true);
        }
      }, [errors]);
  return (
    <form className="DonationForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="donationReport" className="form-label">
          ანგარიში *
        </label>
        <input
          type="text"
          id="donationReport"
          name="donationReport"
          {...register("donationReport", { required: true })}
          className={`form-input ${donationError && 'donationInputError'} `}
        />
        {donationError && (
          <p className="donationError">მისამართი აუცილებელია</p>
        )}
      </div>
      <div className="submitBox">
        <button type="submit" className="submit">
          დაპოსტვა
        </button>
      </div>
    </form>
  )
}

export default DonationForm
