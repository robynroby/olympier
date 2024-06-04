import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
        <div className='info'>
            <h3 className='infor'>Pellentesque suscipit fringilla libo eu.</h3>
            
        </div>
        <div className='foot'>
            <div className='copy'></div>
        <div className='comp'>
         <ul className='company'>
         <h3>Company</h3>
         <li>About us</li>
         <li>Blog</li>
         <li>Contact us</li>
         <li>Pricing </li>
         <li>Testimonials</li>
            </ul> 
            <ul className='support'>
                <h3>Support</h3>
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Status</li>
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
          <button type="submit">
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