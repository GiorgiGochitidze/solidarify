import { Link, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import './CSS/navbar.css'
import axios from 'axios';
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

const Navbar = ({logIn,setLogIn}) => {

    const navigate = useNavigate()

    const [menuOpen, setMenuOpen] = useState(false);

    const responiveMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const logout  = async()=>{
        try{
            const response = await axios.get('http://localhost:5000/api/users/logout',{withCredentials:true})
            console.log(response)
            setLogIn(false)
            navigate('/')
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    const LinkStyles = {
        color: 'white',
        textDecoration: "none",
        listStyle: "none",
    }
    return ( 
        <header>
            <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                <Link style={LinkStyles} to='/'><p>მთავარი</p></Link>
                <Link style={LinkStyles} to='/InfosPage'><p>ინფორმაციები</p></Link>
                <Link style={LinkStyles} to='/Locations'><p>ლოკაციები</p></Link>
                <Link style={LinkStyles} to='/LawyerNums'><p>იურისტების ნომრები</p></Link>
                <Link style={LinkStyles} to='#'><p>კონტაქტი</p></Link>
                {logIn && <Link style={LinkStyles} to='/Admin' ><p>ადმინი</p></Link>}
                {!logIn? <Link style={LinkStyles} to='/Login'><p>შესვლა</p></Link>: <li style={LinkStyles} onClick={logout} ><p>გამოსვლა</p></li> }
            </nav>
                <RxHamburgerMenu className={`menu-icon ${menuOpen ? 'hide' : ''}`}  onClick={responiveMenu} />
                <IoClose className={`menu-close ${menuOpen ? 'show' : ''}`} onClick={responiveMenu}/>
        </header>
     );
}
 
export default Navbar;