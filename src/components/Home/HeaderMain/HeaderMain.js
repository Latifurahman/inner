import React from 'react';
import carousel from '../../../images/carousel1.jpg';
import carousel2 from '../../../images/carousel2.jpg';
import carousel3 from '../../../images/carousel3.jpg';
import carousel4 from '../../../images/fdhfghfg-unsplash.jpg';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> 
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel} className="d-block w-100" alt="" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1> <span className="carousel-heading">INTERIOR DESIGNS</span> <br /> FROM THE FUTURE</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100" alt="" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1> <span className="carousel-heading">INTERIOR DESIGNS</span> <br /> FROM THE FUTURE</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel4} className="d-block w-100" alt="" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1> <span className="carousel-heading">INTERIOR DESIGNS</span> <br /> FROM THE FUTURE</h1>
                        </div>
                    </div>
                </div>
                
            </div>
        </main>
    );
};

export default HeaderMain;