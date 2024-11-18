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
                    <button className="social-icon" onClick={() => window.open('https://www.facebook.com', '_blank')}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png" alt="Facebook" />
                    </button>
                    <button className="social-icon" onClick={() => window.open('https://twitter.com', '_blank')}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Twitter_logo.svg" alt="Twitter" />
                    </button>
                    <button className="social-icon" onClick={() => window.open('https://telegram.org', '_blank')}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" />
                    </button>
                    <button className="social-icon" onClick={() => window.open('https://www.instagram.com', '_blank')}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
                    </button>
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
