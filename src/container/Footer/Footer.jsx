import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, RudHeath, CW9 7SG
        </p>
        <p className="p__opensans">+ 1 212-344-1230</p>
        <p className="p__opensans">+ 1 212-555-1230</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others"
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: "15px" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">08:00 AM - 12:00 AM</p>
        <p className="p__opensans"> Saturday - Sunday</p>
        <p className="p__opensans">08:00 AM - 12:00 AM</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 Geritch. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
