import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="container">
          <div className="footer-title">Artsy Collective</div>
          <div className="footer-row border-largest">
            <div className="column border-bottom pb-0">
              <p className="title">Explore Artsy Collective</p>
              <div className="link">
                <Link to="/" title="collection">Collections</Link>
                <Link to="/" title="coco-crush">Coco Crush</Link>
                <Link to="/" title="high-jewelry">High Jewelry</Link>
                <Link to="/" title="bridal">Bridal</Link>
                <Link to="/" title="care-service">Care {'&'} Services</Link>
              </div>
            </div>
            <div className="column border-bottom pb-0">
              <p className="title">Our Store</p>
              <div className="link">
                <Link to="/" title="store">Store Locator</Link>
                <Link to="/" title="book">Book Appointment</Link>
              </div>
            </div>
            <div className="column border-bottom pb-0">
              <p className="title">Help</p>
              <div className="link">
                <Link to="/" title="help">Help Center</Link>
                <Link to="/" title="FAQ">FAQ</Link>
              </div>
            </div>
            <div className="column border-bottom border-right pb-0">
              <p className="title">About Us</p>
              <div className="link">
                <Link to="/" title="artsy-collective">Artsy Collective Story</Link>
                <Link to="/" title="sustainability">Sustainability</Link>
                <Link to="/" title="join">Join Us</Link>
              </div>
            </div>
            <div className="column column-largest pb-0">
              <div className="column-second border-bottom-2 mt-5">
                <p className="title-second">BECOME A MEMBER</p>
                <div className="link-second">
                  <Link to="/" title="join-now">Join now and get 10% off your next purchase!</Link>
                </div>
                
              </div>
              <div className="column-second border-bottom-3">
                <p className="title-second mt-1">NEED A HAND?</p>
                <div className="link-second">
                <Link to="/" title="phone">We’re available by phone (888.492.7297) and chat everyday from 9 a.m.–10 p.m. GMT+7.</Link>
                </div>
                <div className="contact">
                <Link to="/" onClick={(e) => {
                  window.location.href = "sms:+628000000000";
                  e.preventDefault(); }} target="__blank" title="sms" className="contact-content">
                    <img className="c-content-img" src="assets/icon/message-square.svg" alt="icon-contact"/>
                    Text
                  </Link>
                  <Link to="/" onClick={(e) => {
                  window.location.href = "https://api.whatsapp.com/send?phone=628000000000";
                  e.preventDefault(); }} target="__blank" className="contact-content">
                    <img className="c-content-img" src="assets/icon/chat.svg" alt="icon-contact"/>
                    Chat
                  </Link>
                  <Link to="/" onClick={(e) => {
                  window.location.href = "mailto:support@artsy-collective.com";
                  e.preventDefault(); }}  target="_blank" className="contact-content">
                    <img className="c-content-img" src="assets/icon/mail.svg" alt="icon-contact"/>
                    Email
                  </Link>
                  <Link to="/" onClick={(e) => {
                  window.location.href = "tel:+628000000000";
                  e.preventDefault(); }} target="_blank" className="contact-content">
                    <img className="c-content-img" src="assets/icon/phone-call.svg" alt="icon-contact"/>
                    Call
                  </Link>
                </div>
                
              </div>
            </div>
          </div>
          <div className="footer-row">
            <div className="column border-bottom mt-2">
              <p className="title-horizontal"><span style={{ fontWeight: "700" }}>Indonesia </span> - Rp (Rupiah)</p>
            </div>
            
          </div>
          <div className="footer-row">
            <div className="column">
              <div className="link-horizontal">
                <Link to="/" title="legal">Legal Information</Link>
                <span>-</span>
                <Link to="/" title="terms">Terms</Link>
                <span>-</span>
                <Link to="/" title="privacy">Privacy Policy {'&'} Cookies</Link>
                <span>-</span>
                <Link to="/" title="affiliation">Affiliation</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="f-bottom-title">©2021 Artsy Collective<br/> Indonesia - France - United Kingdom - United States - Germany - Spain - Italy</p>
        <div className="f-bottom-card">
          <img className="card-img" src="assets/icon/visa.svg" alt="credit-card"/>
          <img className="card-img" src="assets/icon/mastercard.svg" alt="credit-card"/>
          <img className="card-img" src="assets/icon/cirrus.svg" alt="credit-card"/>
          <img className="card-img" src="assets/icon/american-ex.svg" alt="credit-card"/>
          <img className="card-img" src="assets/icon/jcb.svg" alt="credit-card"/>
          <img className="card-img" src="assets/icon/paypal.svg" alt="credit-card"/>
        </div>
      </div>
    </footer>
  )
}

export default Footer;