import { Link } from "react-router-dom"; // For internal routing
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // Importing social media icons

import "../componentsCSS/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Section 1: Name and Intro */}
      <div className="flexbox">
        <div className="footer-section">
          <h3 className="section-main">Sam&apos;s Activity Tracker</h3>
          <p className="section-sub">
            Helping you manage your time wisely, track your activities and
            achieve more.
          </p>
        </div>

        {/* Section 2: Useful Links */}
        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul className="section-links">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link to="">How It Works</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Company */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul className="section-us">
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
            <li>
              <Link to="/contact-me">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Section 4: Social Media Icons */}
      <div className="social-media">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/share/18UGY2swKN/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/mr_saamy?igsh=emhvNWQwZmtyNHEz&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammadsami01"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/MuhammadSami643"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Section 5: Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 Sam&apos;s Activity Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
