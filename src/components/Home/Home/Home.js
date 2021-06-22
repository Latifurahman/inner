import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import LatestProjects from '../LatestProjects/LatestProjects';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutUs></AboutUs>
            <Services></Services>
            <LatestProjects></LatestProjects>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;