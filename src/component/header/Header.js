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
            </div>
        </header>
    );
};

export default Header;