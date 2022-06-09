import React, { useState } from 'react';
import './Nav.css';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiFillProject } from 'react-icons/ai';
import { RiServiceFill } from 'react-icons/ri';
import { AiFillContacts } from 'react-icons/ai';

const Nav = () => {
    const [activeNow, setActiveNow] = useState('#');
    return (

        <nav>
            <a href="#" onClick={() => setActiveNow('#')} className={activeNow === '#' ? 'active' : ''}><AiFillHome></AiFillHome></a>
            <a href="#about" onClick={() => setActiveNow('#about')} className={activeNow === '#about' ? 'active' : ''}><AiOutlineUser></AiOutlineUser></a>
            <a href="#experience" onClick={() => setActiveNow('#project')} className={activeNow === '#experience' ? 'active' : ''}><AiFillProject></AiFillProject></a>
            <a href="#services" onClick={() => setActiveNow('#services')} className={activeNow === '#services' ? 'active' : ''}><RiServiceFill></RiServiceFill></a>
            <a href="#contact" onClick={() => setActiveNow('#contact')} className={activeNow === '#contact' ? 'active' : ''}><AiFillContacts></AiFillContacts></a>
        </nav>
    );
};

export default Nav;