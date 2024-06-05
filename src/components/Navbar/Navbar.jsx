import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                {/* Replace with your logo image */}
                <img src="your-logo.png" alt="Logo" />
                <h4>Olympier Org</h4>
            </div>
            <ul className="navbar__links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
            </ul>
            <a href="/contact" className="navbar__contact-btn">contact us</a>
        </nav>
    );
};

export default Navbar;