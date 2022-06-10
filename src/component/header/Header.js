import React from 'react';
import CTA from './CTA';
import './Header.css';
import me from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';
import TextAnimation from './TextAnimation';

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Sadiqur Rahman</h1>
                <h5 className="text-light">
                    <TextAnimation></TextAnimation>
                </h5>


                <CTA></CTA>

                <HeaderSocial></HeaderSocial>

                <div className='img_des'>
                    <div className="me">
                        <img src={me} alt="" />
                    </div>
                    <div className='head_description'>
                        <p>Rahman is a seasoned full-stack developer and software architect with in-depth knowledge of Node.js, and React. He has a unique ability of understanding and translating business requirements into development roadmaps.</p>
                    </div>
                </div>

                <a href="#contact" className='scroll-down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;