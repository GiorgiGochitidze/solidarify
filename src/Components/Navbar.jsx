import { Link } from 'react-router-dom';
import './CSS/navbar.css'

const Navbar = ({logIn,setLogIn}) => {
    const LinkStyles = {
        color: 'white',
        textDecoration: "none",
        listStyle: "none",
    }
    return ( 
        <header>
            <nav>
                <Link style={LinkStyles} to='/'><p>მთავარი</p></Link>
                <Link style={LinkStyles} to='/InfosPage'><p>ინფორმაციები</p></Link>
                <Link style={LinkStyles} to='/Locations'><p>ლოკაციები</p></Link>
                <Link style={LinkStyles} to='/LawyerNums'><p>იურისტების ნომრები</p></Link>
                <Link style={LinkStyles} to='#'><p>კონტაქტი</p></Link>
                {logIn && <Link style={LinkStyles} to='/Admin' ><p>ადმინი</p></Link>}
                {!logIn? <Link style={LinkStyles} to='/Login'><p>შესვლა</p></Link>: <li style={LinkStyles} onClick={()=>{setLogIn(false)}} ><p>გამოსვლა</p></li> }
            </nav>
        </header>
     );
}
 
export default Navbar;