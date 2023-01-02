import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9tv5yuc', 'template_y7pab69', form.current, 'GTGxWj0MCHH3KpHsW')
        .then((result) => {
            console.log("Message Sent Successfully");
        }, (error) => {
            console.log("Message failed to send, try again.");
      });
      e.target.reset();
  };

    return (
        <section className='contact' id='contact'>
            <div className='contactBox'>
                <h5>Get in Touch!</h5>
                <h2>Contact Me</h2>
                <div className="contact-container">
                    <div className="contact-options">
                        <article className="contact-option">
                            <AiOutlineMail className='contact_option-icon' />
                            <h4><strong>Email</strong></h4>
                            <h6>clarawong20@gmail.com</h6>
                            <a href="mailto:clarawong20@gmail.com" targets="_blank">Send a message</a>
                        </article>
                        <article className="contact-option">
                            <BiPhoneCall className='contact_option-icon' />
                            <h4><strong>Phone/Text</strong></h4>
                            <h6>905 226 9930</h6>
                            <a href="tel:905-226-9930" targets="_blank">Make a Call</a>
                            <p></p>
                            <a href="sms:+19052269930" targets="_blank">Send a Text</a>
                        </article>
                    </div>

                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your Full Name' required />
                        <input type="email" name='email' placeholder='Your Email' required />
                        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                        <button type='submit' className='btn-primary'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact