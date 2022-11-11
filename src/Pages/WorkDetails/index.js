import './index.scss';
import Navbar from '../../components/Navbar';
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import WorksData from '../../assets/data/works-data.json';



function WorkDetails() {
    const { id } = useParams();

    const selectedWork = WorksData.filter(work => 
        work._id === id 
    )

    
   return <div>
        <Navbar />
        
        <div className='work__detail'>
        {selectedWork.map(work => {
            return (
                <div key={work._id}>
                    <div className='work__card'>
                    <img className='work__detail-img img1' src={work.img1} alt='main' />
                        <div className='work__info-card'>
                        <h1 className='work__detail-title'>{work.title}</h1>
                        <p className='work__detail-basics'>{work.category}{work.measurement ? '  |  ' + work.measurement : ''} {work.material ? '  |  ' + work.material : ''}  |  {work.year}</p>
                        <p className='work__detail-description'>{work.description}</p>
                        <p className='work__detail-description'>{work.details}</p>
                        {work.link && <NavLink className='work__detail-link' to={work.link}><p>LINK</p></NavLink>}
                        {work.credits && <div><p className='work__detail-credits'>{work.credits[0]}</p><p className='work__detail-credits'>{work.credits[1]}</p></div>}
                        </div>
                    </div>
                <div className='img-grid'>
                {work.img2 && <img className='work__detail-img img2' src={work.img2} alt='main' />}
                {work.img3 && <img className='work__detail-img img3' src={work.img3} alt='main' />}
                {work.img4 && <img className='work__detail-img img4' src={work.img4} alt='main' />}
                {work.img5 && <img className='work__detail-img img5' src={work.img5} alt='main' />}
                {work.img6 && <img className='work__detail-img img6' src={work.img6} alt='main' />}
                {work.img7 && <img className='work__detail-img img7' src={work.img7} alt='main' />}
                </div>
                </div>
            )
        })}
        </div>
       
    </div>
};

export default WorkDetails;