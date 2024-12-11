import { useState } from 'react';
import './CSS/login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LogIn({setLogIn}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('')

    const navigate = useNavigate()

    const Login = async (email,password) =>{
        try{
        await axios.post("http://localhost:5000/api/users/login",{
            email,
            password
        },
        { withCredentials: true }
    )
        setError('')
        setLogIn(true)
        navigate('/')

    }catch(err){
        console.log(err)
        setError('Wrong email or password')
        return
    }
    }

  const HandleLogin = (e)=>{
    e.preventDefault()
    if (!email || !password) {
        setError('Please fill in both email and password');
        return;
    }
    Login(email,password)
  } 

  return (
    <section className='loginPage' >
        <h1 className='LoginHead' >
            Log In
        </h1>
        <form className='loginBox' onSubmit={HandleLogin} >
            <input className='email'  type="email" name='email' id='email' placeholder='Email' value={email}
          onChange={(e) => setEmail(e.target.value)} />
            <input className='password' type="password" name="password" id='password' placeholder='Password' value={password}
          onChange={(e) => setPassword(e.target.value)} />
          <div className='submitBox' >
            {error != "" && <p className='error' >{error}</p>}
            <button type='submit' className='submit' >
                Log In
            </button>
            </div>
        </form>
    </section>
  )
}

export default LogIn