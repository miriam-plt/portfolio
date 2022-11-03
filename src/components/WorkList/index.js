import './index.scss';
import { NavLink } from "react-router-dom";
import Navbar from '../Navbar';
import Work from '../Work';
import WorksData from '../../assets/data/works-data.json';


function WorkList() {

    return (
        <div>
        <Navbar />

        <div className='menu'>
            <div className='menu__item'>
                {WorksData.map(work => {
                    return (
                    <NavLink to={`/works/${work._id}`}>
                        <div className='menu__item-link'>
                            <Work key={work._id} className='menu__title' work={work} />
                                <img className='menu__item-img' src={work.image} alt='work' />                                                         
                        </div>
                    </NavLink>)
                })}
            </div>
        </div>

        </div>
    )
}

export default WorkList;