import './index.scss';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return <div className='nav-bar'>
        <div className='links-top'>
            <Link className='name-link' to='/'>Miriam Poletti</Link>
            <NavLink className='about-link' to='/about'>About</NavLink>
        </div>
        <div className='links-bottom'>
            <NavLink className='cv-link' to='/cv'>CV</NavLink>
            <NavLink className='contact-link' to='/contact'>Contact</NavLink>
        </div>
    </div>
}

export default Navbar;