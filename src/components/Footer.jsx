import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaTelegram,
  FaCcVisa,
  FaCcMastercard,
  FaGooglePlay,
  FaApple,
  FaTv as FaSmartTv,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="footer-container">
          <div className="footer-section socials-section">
            <p>
              <strong>Socials:</strong>
            </p>
            <div className="social-icons">
              <div className="social-column">
                <a href="mailto:filmspace@gmail.com">filmspace@gmail.com</a>
                <a href="https://wa.me/380994581452">
                  <FaWhatsapp
                    style={{ verticalAlign: "middle", marginRight: 8 }}
                  />{" "}
                  +380 99 458 1452
                </a>
              </div>
              <div className="social-column">
                <a
                  href="https://instagram.com/film.space"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    style={{ verticalAlign: "middle", marginRight: 8 }}
                  />{" "}
                  - film.space
                </a>
                <a
                  href="https://t.me/Film.space"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram
                    style={{ verticalAlign: "middle", marginRight: 8 }}
                  />{" "}
                  - @Film.space
                </a>
              </div>
            </div>
          </div>
          <div className="footer-section payment-icons">
            <FaCcVisa style={{ height: 32, width: 32, marginRight: 12 }} />
            <FaCcMastercard style={{ height: 32, width: 32 }} />
          </div>
          <div className="footer-section download-apps">
            <a href="https://play.google.com/store">
              <FaGooglePlay
                style={{ height: 32, width: 32, marginRight: 12 }}
              />
            </a>
            <a href="https://www.apple.com/app-store/">
              <FaApple style={{ height: 32, width: 32, marginRight: 12 }} />
            </a>
            <a href="your-smart-tv-link">
              <FaSmartTv style={{ height: 32, width: 32 }} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
