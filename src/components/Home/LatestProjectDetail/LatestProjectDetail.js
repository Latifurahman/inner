import React from 'react';
import './LatestProjectDetail.css';

const LatestProjectDetail = ({project}) => {
    return (
        
        <div className="col-md-4 project-img-container">
            
                <img className="img-fluid project-single-img" src={project.img} alt="" />
            
                <div className="text-content">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                </div>
               
            </div>
        
    );
};

export default LatestProjectDetail;