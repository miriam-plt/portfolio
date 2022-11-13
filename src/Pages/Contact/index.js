import './index.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../components/Navbar';
import image from '../../images/studio-pic.jpg';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
          .then((result) => {
                console.log(result.text);
              alert('Message succesfully sent!');
              window.location.reload(false);
          }, (error) => {
                console.log(error.text);
              alert('Failed to send the message. Please try again.');
          });

      };


    return <div>
        <Navbar />
        <div className='container'>
        <div className='contact-form'>
            <div className='contact-text'>
            <h5 className='contact-h5'>Get in touch</h5>
            <h6 className='contact-h6'>Whether it is a chat about all things art related or a potential project or opportunity you have in mind, contact me.</h6>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <ul>
                    <li>
                        <input type='text' name='name' placeholder='Name' required />
                    </li>
                    <li>
                        <input type='email' name='email' placeholder='Email' required />
                    </li>
                    <li>
                        <input type='text' name='subject' placeholder='Subject' required />
                    </li>
                    <li>
                        <textarea type='text' name='message' placeholder='Message' required />
                    </li>
                    <li>
                        <input type='submit' className='button' value='SEND' />
                    </li>
                </ul>
            </form>
        </div>
        <img className='contact-pic' src={image} alt='test' />
        </div>
    </div>
}

export default Contact;