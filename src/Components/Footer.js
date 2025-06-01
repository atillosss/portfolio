import React from 'react';
import './Footer.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><FaEnvelope /> <a href="mailto:atillosss25@gmail.com">atillosss25@gmail.com</a></p>
          <p><FaPhone /> <a href="tel:+316397166247">+31 6 397 166 247</a></p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://linkedin.com/in/atilla-agirman" target="_blank" rel="noopener"><FaLinkedin /></a>
            <a href="https://github.com/atillosss" target="_blank" rel="noopener"><FaGithub /></a>
          </div>
        </div>
        <button onClick={scrollToTop} className="back-to-top"><FaArrowUp /></button>
      </div>
      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Atilla Agirman. All rights reserved.</small>
              </div>
    </footer>
  )
}