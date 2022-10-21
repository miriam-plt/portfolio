import './index.scss';
import Navbar from '../../components/Navbar';
import image from '../../images/img-01.png';

const Home = () => {
    return <div className='container homepage'>
        <Navbar />
        <div className='img-container'>
            <img className='work-img' src={image} alt='test' />
            <img className='disappear work2-img' src={image} alt='test' />
            <img className='disappear work3-img' src={image} alt='test' />
        </div>
    </div>
}

export default Home;