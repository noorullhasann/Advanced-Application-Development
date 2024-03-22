import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div>
    <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Learn more about our company and mission.</p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@jobportal.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <p>Stay connected on social media:</p>
            <div className="social-icons">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <p className="copyright">&copy; 2024 JobPortal. All rights reserved.</p>
      </footer>
    </div>
  )
}
