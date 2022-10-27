import './index.scss';
import { NavLink } from "react-router-dom";
import Navbar from '../Navbar';
import Work from '../Work';
import WorksData from '../../assets/data/works-data.json';

function WorkList() {

    return (
        <div>
        <Navbar />
        <div className='work-list'>
        {WorksData.map(work => {
            return (
            <NavLink to={`/${work._id}`}>
            <div className='work-title'>
                <Work key={work._id} work={work} />
            </div>
            </NavLink>)
        })}
        </div>
        </div>
    )
}

export default WorkList;