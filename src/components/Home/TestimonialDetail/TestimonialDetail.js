import React from 'react';
import rating from '../../../images/rating.png';
import './TestimonialDetail.css';


const TestimonialDetail = ({ testimonial }) => {

    return (
        <div className="Testimonial-detail-container">
            <p>{testimonial.description}</p>
            <div className="row">
                <div className="col-8 img-part">
                    <img className="img-fluid" style={{height: '150px', width: '120px'}} src={testimonial.img} alt="" />
                    <div className="testimonial-detail-title">
                        <h5>{testimonial.name}</h5>
                        <p><small>{testimonial.profile}</small></p>
                    </div>
                </div>
                <div className="col-4 d-flex align-items-center">
                    <img className="img-fluid" style={{height: '80px', width: '80px'}} src={rating} alt="" />
                </div>
            </div>
        </div>

    );
};

export default TestimonialDetail;