import React from 'react';
import './ServicesDetail.css';

const ServicesDetail = ({service}) => {
    return (
        <div className="col-md-4 service-detail-container">
            <div className="services-detail-wrap">
                <img className="img-fluid" style={{ height: '45px' }} src={service.img} alt="" />
                <h4>{service.name}</h4>
                <p>{service.description}</p>
                <h5>$ {service.rangeStart}</h5>
            </div>
        </div>
    );
};

export default ServicesDetail;