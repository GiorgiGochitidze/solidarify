import { useState } from 'react';
import './CSS/admin.css'
// import InfoForm from './adminForms/InfoForm';
import LocationForm from './adminForms/LocationForm';

function Admin() {

    const [Form,setForm] = useState(1)

  return (
    <section className="adminPage" >
      <div className='adminNavbar' >
          <li className={`listHeads ${Form == 1?'chosen':''} `} onClick={()=>{setForm(1)}} >ინფორმაცია</li>
          <li className={`listHeads ${Form == 2?'chosen':''} `} onClick={()=>{setForm(2)}} >ლოკაციები</li>
          <li className={`listHeads ${Form == 3?'chosen':''} `} onClick={()=>{setForm(3)}} >ადვოკატები</li>
          <li className={`listHeads ${Form == 4?'chosen':''} `} onClick={()=>{setForm(4)}} >დონაციები</li>
      </div>
      <div className='adminFormBox' >
        {/* <InfoForm/> */}
        <LocationForm/>
      </div>
    </section>
  );
}

export default Admin;
