import './index.scss';
import Navbar from '../../components/Navbar';
import { NavLink } from 'react-router-dom';


const Error = () => {
    return (
    <div>
        <Navbar />
        <div className='error-page'>
            <h1 className='error-title'>Page not found</h1>
            <h5 className='error-description'>Sorry, the page you are looking for doesn't exist or has been moved.</h5>
            <NavLink to={'/'}><button className='error-button'>Back to Home</button></NavLink>
        </div>
    </div>
)}

export default Error;