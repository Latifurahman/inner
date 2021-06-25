import React from 'react';
import './Services.css';
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
                            services.map(service => <ServicesDetail key={service._id} service={service}></ServicesDetail>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;