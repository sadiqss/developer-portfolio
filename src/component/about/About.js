import React from 'react';
import './About.css';
import me from '../../assets/me2.jpg';
import { FaAward } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-img">
                        <img src={me} alt="" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <FaAward className='about_icon'></FaAward>
                            <h5>Projects</h5>
                            <small>3 projects</small>
                        </article>
                        <article className='about_card'>
                            <BiUser className='about_icon'></BiUser>
                            <h5>Clients</h5>
                            <small>2 From UK</small>
                        </article>

                    </div>
                    <div>
                        <p>I am proficient on : HTML, CSS, Bootstrap, Tailwind JavaScript, React, Mongodb, JWT, NodeJS, Firebase. Also familiar with React Native, TypeScript, Next JS.
                            I did achieve masters of science on Renewable Energy Engineering from Coventry University.
                            I did my bachelors on Agricultural Engineering. I am fluent in English and Bangla. Also I am good at Spanish. I do know Matlab, ArcGIS etc. I did work on AutoCAD and sketch up. Had a practical training on "Refrigeration System".
                            Travelling, learning new language and reading book is my hobby.</p>
                    </div>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;