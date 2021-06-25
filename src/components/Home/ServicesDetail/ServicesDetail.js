import React from 'react';
import './ServicesDetail.css';
import { Link } from 'react-router-dom';
import './ServicesDetail.css';


const ServicesDetail = (props) => {
    const {_id, name, imageURL, price, description} = props.service;
    return (
        <div className="col-md-4 service-detail-container p-3">
            <div className="card" style={{width: '18rem'}}>
                <img src={imageURL} className="card-img-top img-fluid" alt="..."></img>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text" style={{color: '#7D7D7D'}}>{description}</p>
                    <h4 className="card-text">$ {price}</h4>
                    <button className="btn btn-secondary service-btn"><Link to={"/service/"+_id}>Take Service</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetail;