import { useEffect, useState } from 'react';
import './CSS/admin.css'
import InfoForm from './adminForms/InfoForm';
import LocationForm from './adminForms/LocationForm';
import LawyerForm from './adminForms/LawyerForm';
import DonationForm from './adminForms/DonationForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Admin({setLogIn}) {

    const [form,setForm] = useState(1)
    const navigate = useNavigate()

    const checkToken = async()=>{
      try{
        const response = await axios.get('http://localhost:5000/api/users/verifyToken',{withCredentials:true})
        console.log(response.data);
        
        if(response.data.status == 'success'){
          setLogIn(true)
        }else{
          setLogIn(false)
          navigate('/')
        }
      }catch(err){
        console.log(err)
        setLogIn(false)
          navigate('/home')
      }
    }

    useEffect(()=>{
        const formPage = localStorage.getItem('form')
        if(formPage)setForm(Number(formPage))
        checkToken()
    },[])

    

  return (
    <section className="adminPage" >
      <div className='adminNavbar' >
          <li className={`listHeads ${form == 1?'chosen':''} `} onClick={()=>{setForm(1);localStorage.setItem('form',"1")}} >ინფორმაცია</li>
          <li className={`listHeads ${form == 2?'chosen':''} `} onClick={()=>{setForm(2);localStorage.setItem('form',"2")}} >ლოკაციები</li>
          <li className={`listHeads ${form == 3?'chosen':''} `} onClick={()=>{setForm(3);localStorage.setItem('form',"3")}} >ადვოკატები</li>
          <li className={`listHeads ${form == 4?'chosen':''} `} onClick={()=>{setForm(4);localStorage.setItem('form',"4")}} >დონაციები</li>
      </div>
      <div className='adminFormBox' >
        {
        form == 1?
        <InfoForm/>:
        form == 2?
        <LocationForm/>:
        form == 3?
        <LawyerForm/>:
        <DonationForm/>
        }
      </div>
    </section>
  );
}

export default Admin;
