import { useState } from 'react';
import './CSS/admin.css'
import InfoForm from './adminForms/InfoForm';
import LocationForm from './adminForms/LocationForm';
import LawyerForm from './adminForms/LawyerForm';

function Admin() {

    const [form,setForm] = useState(1)

  return (
    <section className="adminPage" >
      <div className='adminNavbar' >
          <li className={`listHeads ${form == 1?'chosen':''} `} onClick={()=>{setForm(1)}} >ინფორმაცია</li>
          <li className={`listHeads ${form == 2?'chosen':''} `} onClick={()=>{setForm(2)}} >ლოკაციები</li>
          <li className={`listHeads ${form == 3?'chosen':''} `} onClick={()=>{setForm(3)}} >ადვოკატები</li>
          <li className={`listHeads ${form == 4?'chosen':''} `} onClick={()=>{setForm(4)}} >დონაციები</li>
      </div>
      <div className='adminFormBox' >
        {
        form == 1?
        <InfoForm/>:
        form == 2?
        <LocationForm/>:
        form == 3?
        <LawyerForm/>:
        null
        }
      </div>
    </section>
  );
}

export default Admin;
