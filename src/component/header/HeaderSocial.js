import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillDribbbleCircle } from 'react-icons/ai';

const HeaderSocial = () => {
    return (
        <div className='header_social'>
            <a href="https://www.linkedin.com/in/sadiqur-rahman-209863176/" target="_blank"><AiFillLinkedin /></a>
            <a href="https://github.com/sadiqss" target="_blank"><AiFillGithub></AiFillGithub></a>
            <a href="https://www.drbble.com/" target="_blank"><AiFillDribbbleCircle></AiFillDribbbleCircle></a>

        </div>
    );
};

export default HeaderSocial;