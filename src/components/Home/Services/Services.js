import React from 'react';
import './Services.css';
import residential from '../../../images/residential_img.jpg';
import restaurant from '../../../images/restaurant_img.jpg';
import corporate from '../../../images/corporate_img.jpg';
import commercial from '../../../images/commercial_img.jpg';
import industry from '../../../images/industry_img.jpg';
import ServicesDetail from '../ServicesDetail/ServicesDetail';
import { useState } from 'react';
import { useEffect } from 'react';



const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    const handleService = data =>{

    }
    return (
        <section className="services" onClick={handleService}>
            <div className="container">
                <div className="services-title">
                    <h1>OUR SERVICES</h1>
                    <p>Far far away behind the word mountains far from the countries Vokalia and <br /> Consonantia there live the blind texts.</p>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        {
                            services.map(service => <ServicesDetail service={service}></ServicesDetail>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;