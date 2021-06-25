import React from 'react';
import { useState } from 'react/cjs/react.development';
import './LatestProjectDetail.css';

const LatestProjectDetail = ({project}) => {
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('')
    const getImg = (img) => {
        setTempImgSrc(img)
        setModel(true)
    }
    return (
        
        <div className="col-md-4 project-img-container" onClick={() => getImg(project.img)}>
            
                <img className="img-fluid project-single-img" src={project.img} alt="" />
            
                <div className="text-content">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                </div>
               
            </div>
        
    );
};

export default LatestProjectDetail;