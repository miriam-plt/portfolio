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
                <img className='work__detail-img' src={work.image} alt='main' />
                <h1 className='work__detail-title'>{work.title}</h1>
                <p className='work__detail-basics'>{work.category}{work.measurement ? '  |  ' + work.measurement : ''} {work.material ? '  |  ' + work.material : ''}  |  {work.year}</p>
                <p className='work__detail-description'>{work.description}</p>
                {work.link && <NavLink className='work__detail-link' to={work.link}><p>LINK</p></NavLink>}
                {work.credits && <div><p className='work__detail-credits'>{work.credits[0]}</p><p className='work__detail-credits'>{work.credits[1]}</p></div>}
                </div>
            )
        })}
        </div>
       
    </div>
};

export default WorkDetails;