import './ContactUs.scss'

const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className="contact-image">
                <img src='/image1.jpg' alt="Contact Us" />
            </div>
            <div className="contact-content">
                <h2>Contact Us</h2>
                <p>We'd love to hear from you! Whether you have questions about our services, need assistance, or want to provide feedback, feel free to reach out. Our team is here to help you with all your waste collection needs.</p>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs