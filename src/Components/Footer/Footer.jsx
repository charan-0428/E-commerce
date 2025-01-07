import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h2 className="footer-title">E-COM</h2>
          <p className="footer-description">Your one-stop destination for premium fashion and lifestyle products.</p>
          <div className="footer-social-icons">
            <Facebook className="footer-icon facebook" />
            <Instagram className="footer-icon instagram" />
            <Twitter className="footer-icon twitter" />
          </div>
        </div>

        {/* Features */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Main Features</h3>
          <ul className="footer-list">
            <li>Premium Quality</li>
            <li>24/7 Customer Support</li>
            <li>Fast & Free Shipping</li>
            <li>Secure Payment</li>
            <li>Money-back Guarantee</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-list">
            <li className="footer-link">About Us</li>
            <li className="footer-link">Privacy Policy</li>
            <li className="footer-link">Terms & Conditions</li>
            <li className="footer-link">FAQs</li>
            <li className="footer-link">Contact Us</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Contact Us</h3>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <MapPin className="footer-icon" />
              <p>123 Fashion Street, New York, NY 10001</p>
            </div>
            <div className="footer-contact-item">
              <Mail className="footer-icon" />
              <p>support@ecom.com</p>
            </div>
            <div className="footer-contact-item">
              <Phone className="footer-icon" />
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-text">© {new Date().getFullYear()} E-COM. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
