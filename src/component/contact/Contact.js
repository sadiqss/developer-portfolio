import React, { useRef } from 'react';
import './Contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aazvxbe', 'service_aazvxbe', form.current, 'f6N0yjaVN4bvI2Gtd')

        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <AiOutlineMail className='contact-option-icon'></AiOutlineMail>
                        <h4>Email</h4>
                        <h5>rahman.sadiqur012@gmail.com</h5>
                        <a href="mailto:rahman.sadiqur012@gmail.com">Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className='contact-option-icon'></BsWhatsapp>
                        <h4>WhatsApp</h4>
                        <h5>+4407999356970</h5>
                        <a href="https://api.whatsapp.com/send?phone+4407999356970" target="_blank">Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" id="" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;