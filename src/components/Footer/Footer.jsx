import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
        <div className='info'>
            <h3 className='infor'>Olympier: Clean, Green, and Pristine.</h3>
            
        </div>
        <div className='foot'>
            <div className='copy'>
            <img src="/path/to/your/log.png" alt="Logo" />
      <p>&copy; 2024 Olympier. All rights reserved.</p>
      <div className="social-icons">
        <a href="">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
            </div>
        <div className='comp'>
         <ul className='company'>
         <h3>Company</h3>
         <ul>About us</ul>
         <ul>Blog</ul>
         <ul>Contact us</ul>
         <ul>Pricing </ul>
         <ul>Testimonials</ul>
            </ul> 
            <ul className='support'>
                <h3>Support</h3>
                <ul>Help Center</ul>
                <ul>Terms of Service</ul>
                <ul>Legal</ul>
                <ul>Privacy Policy</ul>
                <ul>Status</ul>
                </ul> 
                <div>
      <h3>Stay Up to Date</h3>
      {/* <form onSubmit={handleSubmit}> */}
        <div className="input-container">
          <input
            type="email"
            placeholder="Your email address"
            required
          />
          <button className="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
    </div>
        </div>
        </div>
    
        </div>
    )
}

export default Footer