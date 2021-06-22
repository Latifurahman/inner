import React from 'react';
import './Services.css';
import residential from '../../../images/home.png';
import restaurant from '../../../images/restaurant.png';
import corporate from '../../../images/corporate.png';
import commercial from '../../../images/commercial.png';
import industry from '../../../images/indutrial.png';
import ServicesDetail from '../ServicesDetail/ServicesDetail';

const servicesData = [
    {
        name: 'Residential Design',
        description: 'We bring the right people together to challenge established thinking and drive transform in 2020',
        img: residential,
        rangeStart: 3000
    },
    {
        name: 'Restaurant Design',
        description: 'We bring the right people together to challenge established thinking and drive transform in 2020',
        img: restaurant,
        rangeStart: 2000
    },
    {
        name: 'Corporate Design',
        description: 'We bring the right people together to challenge established thinking and drive transform in 2020',
        img: corporate,
        rangeStart: 3500
    },
    {
        name: 'Commercial Design',
        description: 'We bring the right people together to challenge established thinking and drive transform in 2020',
        img: commercial,
        rangeStart: 4000
    },
    {
        name: 'Industrial Design',
        description: 'We bring the right people together to challenge established thinking and drive transform in 2020',
        img: industry,
        rangeStart: 5000
    },
    
]

const Services = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="services-title">
                    <h1>OUR SERVICES</h1>
                    <p>Far far away behind the word mountains far from the countries Vokalia and <br /> Consonantia there live the blind texts.</p>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        {
                            servicesData.map(service => <ServicesDetail service={service}></ServicesDetail>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;