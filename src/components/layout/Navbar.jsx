import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/logo-3.png";

import "./navbar.css";

const PHONE = "+91-8917553919";
const EMAIL = "enquiry@hikahosystem.com";
const HOURS = "Monday to Friday: 9.30 am to 6.30 PM";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top Bar – bilkul same look */}
      <div className="top-bar">
        <div className="top-bar-container">
          {/* Left – Social Icons */}
          <div className="social-icons">
            <span>Follow On:</span>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* Right – Contact details */}
          <div className="contact-info">
            <span>📞 Call us: {PHONE}</span>
            <span>✉ {EMAIL}</span>
            <span>🕒 {HOURS}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`main-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <img
              src={logo}
              alt="Hikaho System"
              style={{ height: "65px", width: "auto" }}
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/career">Career</Link>
            <Link to="/industry">Industry Practice</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>

          {/* Enquire Button */}
          <div className="enquire-btn">
            <button>Enquire Now »</button>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer (same as before) */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <button onClick={closeMenu} aria-label="Close">
            ✕
          </button>
        </div>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/career" onClick={closeMenu}>
              Career
            </Link>
          </li>
          <li>
            <Link to="/industry" onClick={closeMenu}>
              Industry Practice
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="drawer-contact">
          <h4>Contact Info</h4>
          <p>📞 {PHONE}</p>
          <p>✉ {EMAIL}</p>
          <p>🕒 {HOURS}</p>
        </div>
      </div>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}
