import React from 'react';
import './footer.css';
import logo from '../../images/logo.webp'; 

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="social-icons">
                    <a href="#" className="social-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png" alt="Facebook" />
                    </a>
                    <a href="#" className="social-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Twitter_logo.svg" alt="Twitter" />
                    </a>
                    <a href="#" className="social-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" />
                    </a>
                    <a href="#" className="social-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
                    </a>
                </div>
            </div>

            <hr className="divider" />

            <div className="copyright">
                © 2024 Cosmetics Store. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
