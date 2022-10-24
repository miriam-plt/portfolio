import './index.scss';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import image from '../../images/img-01.png';

const Home = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };


    return <div className='container homepage'>
        <Navbar />
        <div className='img-container'>
            <img className={isHovering ? 'img-hover' : 'img-unselected'} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={image} alt='test' />
            <img className={isHovering ? 'img-hover' : 'img-unselected'} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={image} alt='test' />
            <img className={isHovering ? 'img-hover' : 'img-unselected'} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={image} alt='test' />
            <img className={isHovering ? 'img-hover' : 'img-unselected'} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={image} alt='test' />
            <img className={isHovering ? 'img-hover' : 'img-unselected'} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={image} alt='test' />
            <img className={isHovering ? 'img-hover' : 'img-unselected'} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={image} alt='test' />
        </div>
    </div>
}

export default Home;