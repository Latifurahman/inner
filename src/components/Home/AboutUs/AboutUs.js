import React from 'react';
import { useState } from 'react';
import { useCountUp } from 'react-countup';
import aboutUs from '../../../images/aboutUs.jpg';
import './AboutUs.css';

const AboutUs = () => {
    const [show, setShow] = useState(false);
        
    const { countUp} = useCountUp({
        start: 0,
        end: 25,
        delay: 0,
        duration: 100
    });
    const { countProject } = useCountUp({
        start: 0,
        end: 25,
        delay: 0,
        duration: 100
    });
    return (
        <div className="container aboutUs">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid aboutUs-img" src={aboutUs} alt="" />
                </div>
                <div className="col-md-5">
                    <div className="aboutUs-text">
                        <h5>WELCOME TO INNER</h5>
                        <h1>INNOVATIVE IDEAS <br /> STYLISH DESIGNS</h1>

                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. </p>
                        {
                            show ? <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda magnam, perspiciatis ratione, vero dolorem maxime tempore, perferendis vitae iusto quod quae esse in. Ad dignissimos iure maxime asperiores laborum praesentium maiores a voluptates delectus libero? Quibusdam nam consequuntur, magnam similique accusantium repellat illo molestiae. Neque illum quasi in! Cumque sapiente cum reprehenderit eos qui error provident exercitationem voluptatibus nemo labore dicta, velit possimus odit excepturi perspiciatis culpa neque omnis! Totam adipisci dolore officiis. Minus eaque molestias, officiis, quia explicabo?<br /> <br /></span> : null

                        }


                        {/* <button onClick={()=> setShow(true)}>Show</button>
                    <button onClick={() => setShow(false)}>Hide</button> */}
                        {
                            <button className="btn-read" onClick={() => setShow(!show)}>{show ? "READ LESS" : "READ MORE"}</button>
                        }
                    </div>
                    <div className="experience">
                            <h1>{countUp} +</h1>
                            <p>Years of Experience</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutUs;