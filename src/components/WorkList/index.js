import './index.scss';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Navbar from '../Navbar';
import Work from '../Work';
import WorksData from '../../assets/data/works-data.json';


function WorkList() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div>
        <Navbar />
        
        <div className='menu'>
            <div className='menu__item'>
                {WorksData.map(work => {
                    return (
                    <NavLink to={`/works/${work._id}`} key={work._id} className={'a-link'}>
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