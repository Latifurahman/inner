import React from 'react';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
import clara from '../../../images/clara.jpg';
import steven from '../../../images/steven.jpg';
import jonathan from '../../../images/jonathan.jpg';
import albert from '../../../images/albert.jpg';
import Slider from "react-slick";
import testimonialDetailImg from '../../../images/testimonialDetail.jpg';
import './Testimonial.css';


const testimonialData = [
    {
        description: 'Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.',
        img: clara,
        name: 'Clara Jepsen',
        profile: 'CEO'
    },
    {
        description: 'Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.',
        img: steven,
        name: 'Steven Chaw',
        profile: 'Manager'
    },
    {
        description: 'Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.',
        img: jonathan,
        name: 'Jonathan Joe',
        profile: 'Manager'
    },
    {
        description: 'Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.',
        img: albert,
        name: 'Albert Junior',
        profile: 'Designer'
    },
]

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section>
            <div className="container">
                
                {/* <div className="row">
                    {
                        testimonialData.map(testimonial => <TestimonialDetail testimonial={testimonial}></TestimonialDetail>)
                    }
                </div> */}
                
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid" src={testimonialDetailImg} alt="" />
                        </div>
                        <div className="col-md-5 offset-md-1">
                        <div className="testimonial-title">
                            <h1>TESTIMONIALS</h1>
                            <p>Far far away behind the word mountains far from the countries Vokalia and <br /> Consonantia there live the blind texts.</p>
                        </div>
                        <Slider {...settings}>
                            {
                                testimonialData.map(testimonial => <TestimonialDetail testimonial={testimonial}></TestimonialDetail>)
                            }
                        </Slider>
                        </div>
                    </div>
                
                
            </div>
        </section>
    );
};

export default Testimonial;