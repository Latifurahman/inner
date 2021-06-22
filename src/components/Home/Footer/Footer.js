import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import residentialImg from '../../../images/residential_img.jpg';
import restaurantImg from '../../../images/restaurant_img.jpg';
import corporateImg from '../../../images/corporate_img.jpg';
import commercialImg from '../../../images/commercial_img.jpg';
import industrialImg from '../../../images/industry_img.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <section>
            <div className="container">
                <div className="row footer-container mb-5">
                    <div className="col-md-4">
                        <h2 className="fw-bold">INNER</h2>
                        <p style={{ color: '#7D7D7D', marginTop: '40px', fontSize: '18px'}}>One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        <div className="footer-social">
                            <a href="#"><FacebookIcon></FacebookIcon></a>
                            <a href="#"><TwitterIcon></TwitterIcon></a>
                            <a href="#"><InstagramIcon></InstagramIcon></a>
                            <a href="#"><LinkedInIcon></LinkedInIcon></a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h6 style={{fontSize: '20px'}}>Other Pages</h6>
                        <div className="other-page">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Services</a></li>
                                <li><a href="/">Contact</a></li>
                                <li><a href="/">Project</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h6 style={{ fontSize: '20px' }}>Quick Links</h6>
                        <div className="other-page">
                            <ul>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Term of Service</a></li>
                                <li><a href="/">Disclaimer</a></li>
                                <li><a href="/">Credits</a></li>
                                <li><a href="/">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h6 style={{ fontSize: '20px' }}>Latest Projects</h6>
                        <div className="footer-img">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="single-img-container">
                                        <div className="box">
                                            <div className="imgBx">
                                                <img className="img-fluid" src={residentialImg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-img-container">
                                        <div className="box">
                                            <div className="imgBx">
                                                <img className="img-fluid" src={restaurantImg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-img-container">
                                        <div className="box">
                                            <div className="imgBx">
                                                <img className="img-fluid" src={corporateImg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-img-container">
                                        <div className="box">
                                            <div className="imgBx">
                                                <img className="img-fluid" src={commercialImg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ color: '#7D7D7D' }} />
                <div className="row">
                    <div className="col-md-6">
                        <p style={{ color: '#7D7D7D'}}><small>Interior Design Template Kit by Latifur Rahman</small></p>
                    </div>
                    <div className="col-md-6">
                        <p style={{ float: 'right', color: '#7D7D7D'}}><small>Copyright © {(new Date()).getFullYear()}. All rights reserved.</small></p>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Footer;