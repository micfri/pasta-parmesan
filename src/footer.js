import React, {Component} from 'react';
import './App.css';
import insta from './images/instagram/white.png';
import phone from './images/icons/phone.png';
import email from './images/icons/email.png';
import location from './images/icons/location-white.png';
import youtube from './images/icons/youtube.png';


class Footer extends Component {  

  render() {
    
    return (
      <div className="Footer">
        <Socials />
        <Address />
      </div>
    
    )
  }

}

export default Footer;

const Socials = () => {
  return (
    <div className="Socials">
      <div className="social-container">
        <div className="footer-entry">
          <img className="footer-icon" src={youtube} alt="Logo" />
          <a href="https://www.youtube.com/channel/UCxJElWM129EqF-WzyiwzIpQ">Olivia Fritiofsson</a>
        </div>
        <div className="footer-entry">
          <img className="footer-icon" src={insta} alt="Logo" />
          <a href="https://www.instagram.com/pastaparmesan_foodtruck/">pastaparmesan_foodtruck</a>
        </div>
        <div className="footer-entry">
          <img className="footer-icon" src={phone} alt="Logo" />
          <a href="tel:+46730885230">+46 (0) 730 88 52 30</a>
        </div>
        <div className="footer-entry">
          <img className="footer-icon" src={email} alt="Logo" />
          <a href="mailto:info@pastaparmesan.se">info@pastaparmesan.se</a>
        </div>
      </div>
    </div>
  )
}

const Address = () => {
  return (
    <div className="Address">
      <div className="social-container">
        <div className="footer-entry">
          <img className="footer-icon" src={location} alt="Logo" />
          <p>Järnvägsgatan 18, Markaryd</p>
        </div>
        <div className="footer-entry">
          <p>Gott om parkering finns i närheten</p>
        </div>
      </div>
      
    </div>
  )
}