import './index.scss';
import { useState } from 'react';
import Navbar from '../Navbar';
import Work from '../Work';
import WorksData from '../../assets/data/works-data.json';

function WorkList() {
    // eslint-disable-next-line
    const [works, setWorks] = useState(WorksData);

    return (
        <div>
        <Navbar />
        {works.map(work => {
            return (
            <div>
                <Work key={work._id} work={work} />
            </div>)
        })}
        </div>
    )
}

export default WorkList;