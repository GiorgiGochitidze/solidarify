import { useState } from 'react';
import './CSS/admin.css'

function Admin() {

    const [Form,setForm] = useState(1)

  return (
    <section className="adminPage" >
      <div className='adminNavbar' >
          <li className={`listHeads ${Form == 1?'chosen':''} `} onClick={()=>{setForm(1)}} >Info</li>
          <li className={`listHeads ${Form == 2?'chosen':''} `} onClick={()=>{setForm(2)}} >location</li>
          <li className={`listHeads ${Form == 3?'chosen':''} `} onClick={()=>{setForm(3)}} >lawyers</li>
          <li className={`listHeads ${Form == 4?'chosen':''} `} onClick={()=>{setForm(4)}} >donations</li>
      </div>
      <main>
        
      </main>
    </section>
  );
}

export default Admin;
