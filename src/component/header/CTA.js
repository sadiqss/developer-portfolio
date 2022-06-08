import React from 'react';
import resume from '../../assets/Sadiqur_Rahman.pdf';

const CTA = () => {
    return (
        <div className='cta'>
            <a href={resume} download className='btn'>Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
    );
};

export default CTA;