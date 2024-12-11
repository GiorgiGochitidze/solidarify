import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../CSS/adminForms/LocationForm.css";
import axios from "axios";

function LocationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [timeError, setTimeError] = useState(false);
  const [locationError, setLocationError] = useState(false);

  const postData = async (data) => {
    let coordinates = [null, null];
    if (data.latitude && data.longitude) {
      coordinates = [data.latitude, data.longitude];
    }
    try {
      await axios.post("http://localhost:5000/api/locations", {
        location: data.location,
        coordinates,
        time: data.time,
      });
    } catch (err) {
      console.log(err)
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    setLocationError(false);
    setTimeError(true);
    // postData(data)
  };

  useEffect(() => {
    if (errors.location) {
      setLocationError(true);
    }
    if (errors.time) {
      setTimeError(true);
    }
  }, [errors]);

  return (
    <form className="LocationForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group inputGroup">
        <label htmlFor="location" className="form-label">
          მისამართი *
        </label>
        <input
          type="text"
          id="location"
          name="location"
          {...register("location", { required: true })}
          className={`form-input ${locationError && 'locationInputError'} `}
        />
        {locationError && (
          <p className="locationError">მისამართი აუცილებელია</p>
        )}
      </div>
      <div className="threeInput form-group">
        <div>
          <label htmlFor="latitude" className="form-label">
            კოორდინატები (latitude)
          </label>
          <input
            type="text"
            id="latitude"
            name="latitude"
            {...register("latitude")}
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="longitude" className="form-label">
            კოორდინატები (longitude)
          </label>
          <input
            type="text"
            id="longitude"
            name="longitude"
            className="form-input"
            {...register("longitude")}
          />
        </div>
      </div>

      <div className="form-group inputGroup">
        <label htmlFor="time" className="form-label">
          დრო *
        </label>
        <input
          type="text"
          id="time"
          name="time"
          className={`form-input ${timeError && 'locationInputError'} `}
          {...register("time", { required: true })}
        />
        {timeError && <p className="locationError">დრო აუცილებელია</p>}
      </div>
      <div className="submitBox">
        <button type="submit" className="submit">
          დაპოსტვა
        </button>
      </div>
    </form>
  );
}

export default LocationForm;
