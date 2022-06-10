import React from 'react';
import { BsCheck } from 'react-icons/bs';
import './Services.css';

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container container_services">
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>I can build website that are client focused and provide tangible business results.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Excellent technical communication.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Pixel-perfect website UI UX.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Responsive Web App UI UX.</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Professional website with modern theme.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>E commerce And Shoping system integration.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p> Mobile-Friendly designs.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Back End Web Development with NodeJS.</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service_head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>SEO Optimized Content.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Eye Catching.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>No Grammatical Mistakes.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'></BsCheck>
                            <p>Attractive captions.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Services;