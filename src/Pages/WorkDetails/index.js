import './index.scss';
import Navbar from '../../components/Navbar';
import { useParams } from 'react-router-dom';
// import WorksData from '../../assets/data/works-data.json';



function WorkDetails() {
    const { id } = useParams();

    // filter the works data
    
   return <div>
        <Navbar />
        <p>Details page: {id}</p>
        <h1>{}</h1>
    </div>
};

export default WorkDetails;