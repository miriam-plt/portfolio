import './index.scss';
import Navbar from '../../components/Navbar';
import { useParams } from 'react-router-dom';
import WorksData from '../../assets/data/works-data.json';



function WorkDetails() {
    const { id } = useParams();

    const selectedWork = WorksData.filter(work => 
        work._id === id 
    )

    
   return <div>
        <Navbar />
        <p>Details page: {id}</p>
        {selectedWork.map(work => {
            return (
                <div key={work._id}>
                <h1>Title: {work.title}</h1>
                <p>Category: {work.category}</p>
                <p>Duration: {work.duration}</p>
                <p>Description: {work.description}</p>
                </div>
            )
        })}
       
    </div>
};

export default WorkDetails;