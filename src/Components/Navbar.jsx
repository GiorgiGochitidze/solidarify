import { Link } from 'react-router-dom';
import './CSS/navbar.css'


const Navbar = () => {
    console.log(document.cookie.split('='))
    const LinkStyles = {
        color: 'white',
        textDecoration: "none"
    }

    return ( 
        <header>
            <nav>
                <Link style={LinkStyles} to='/'><p>მთავარი</p></Link>
                <Link style={LinkStyles} to='/InfosPage'><p>ინფორმაციები</p></Link>
                <Link style={LinkStyles} to='/Locations'><p>ლოკაციები</p></Link>
                <Link style={LinkStyles} to='/LawyerNums'><p>იურისტების ნომრები</p></Link>
                <Link style={LinkStyles} to='#'><p>კონტაქტი</p></Link>
                <Link style={LinkStyles} to='/Login'><p>შესვლა</p></Link>
                {document.cookie?.split('=')[0] == 'token' && <Link style={LinkStyles} to='/Admin'><p>ადმინი</p></Link>}
            </nav>
        </header>
     );
}
 
export default Navbar;