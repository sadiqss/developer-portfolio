import React from 'react';
import './Portfolio.css';
import project1 from '../../assets/project1.png';
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>My Portfolio</h2>
            <div className="container portfolio_container">
                <article className='portfolio_item'>
                    <div className="portfolio_item-img">
                        <img src={project1} alt="" />
                    </div>
                    <h3>This is Portfolio Item Title</h3>
                    <a href="https://github.com" className='btn' target="_blank">Github</a>
                    <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;