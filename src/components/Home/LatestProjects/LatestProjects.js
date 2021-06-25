import React from 'react';
import './LatestProjects.css';
import residentialImg from '../../../images/residential_img.jpg';
import restaurantImg from '../../../images/restaurant_img.jpg';
import corporateImg from '../../../images/corporate_img.jpg';
import commercialImg from '../../../images/commercial_img.jpg';
import industrialImg from '../../../images/industry_img.jpg';
import LatestProjectDetail from '../LatestProjectDetail/LatestProjectDetail';


const latestProjectData = [
    {
        id: 'ab',
        title: 'Residential Design',
        description: 'Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.',
        img: residentialImg
    },
    {
        id: 'ac',
        title: 'Restaurant Design',
        description: 'Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.',
        img: restaurantImg
    },
    {
        id: 'ad',
        title: 'Corporate Design',
        description: 'Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.',
        img: corporateImg
    },
    {
        id: 'af',
        title: 'Commercial Design',
        description: 'Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.',
        img: commercialImg
    },
    {
        id: 'ag',
        title: 'Industrial Design',
        description: 'Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.',
        img: industrialImg
    },
]

const LatestProjects = () => {
    return (
        <section className="latest-project">
            <div className="container">
                <div className="latest-project-title">
                    <h1>LATEST PROJECTS</h1>
                    <p>Far far away behind the word mountains far from the countries Vokalia and <br /> Consonantia there live the blind texts.</p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row latest-project-container">
                    {
                        latestProjectData.map(project => <LatestProjectDetail key={project.id} project={project}></LatestProjectDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default LatestProjects;