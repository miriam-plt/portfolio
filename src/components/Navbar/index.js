import './index.scss';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return <div className='nav-bar'>
        <div className='links-top'>
            <Link className='name-link' to='/'>Miriam Poletti</Link>
            <NavLink className='works-link' to='/works'>Works</NavLink>
        </div>
        <div className='links-bottom'>
            <NavLink className='cv-link' to='/about'>About</NavLink>
            <NavLink className='contact-link' to='/contact'>Contact</NavLink>
        </div>
    </div>
}

export default Navbar;