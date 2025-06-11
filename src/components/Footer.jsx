import React from 'react';
import video from '../images/video.png';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-content container'>
                <div className="footer__logo">
                    <img src={video} alt="logo" className='logo' />
                </div>
                <div className="footer__links">
                    <div className="links-items">
                        <h3>Features</h3>
                        <a href="#">Movie Search</a>
                        <a href="#">Branded Links</a>
                        <a href="#">Analytics</a>
                    </div>
                    <div className="links-items">
                        <h3>Resources</h3>
                        <a href="#">Blog</a>
                        <a href="#">Developers</a>
                        <a href="#">Support</a>
                    </div>
                    <div className="links-items">
                        <h3>Company</h3>
                        <a href="#">About</a>
                        <a href="#">Our Team</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="footer__socials">
                    <a href="#">
                        <FaFacebookSquare style={{ height: "24", width: "24" }} />
                    </a>
                    <a href="#">
                        <FaXTwitter style={{ height: "24", width: "24" }} />
                    </a>
                    <a href="#">
                        <FaDiscord style={{ height: "24", width: "24" }} />
                    </a>
                    <a href="#">
                        <FaInstagram style={{ height: "24", width: "24" }} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;