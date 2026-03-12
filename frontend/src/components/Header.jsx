import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown } from 'lucide-react';
import logo from '../images/proformaLogo.png';
import {Mail} from 'lucide-react'

export const Header = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleServicesHover = (isHovering) => {
    setServicesDropdown(isHovering);
  };

  const handleServiceSelect = () => {
    setServicesDropdown(false);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const services = [
    { name: "Accounting", path: "/accounting" },
    { name: "Tax Services", path: "/tax" },
    { name: "IT Solutions", path: "/it" },
    { name: "Digital Services", path: "/digital" },
  ];

  return (
    <>
      <style>{`
        /* ================= HEADER STYLES ================= */
        * {
          box-sizing: border-box;
        }

        :root {
          --header-primary: #0066cc;
          --header-secondary: #0052a3;
          --header-dark: #003366;
          --header-light: #e6f2ff;
          --header-accent: #4da6ff;
          --header-text: #333333;
          --header-text-light: #666666;
          --white: #ffffff;
          --shadow-sm: 0 2px 8px rgba(0, 51, 102, 0.08);
          --shadow-md: 0 4px 16px rgba(0, 51, 102, 0.12);
          --shadow-lg: 0 8px 32px rgba(0, 51, 102, 0.15);
          --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          width: 100%;
          background: var(--white);
          box-shadow: var(--shadow-sm);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .header-main {
          background: var(--white);
          box-shadow: var(--shadow-sm);
          position: relative;
          z-index: 999;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 0;
          position: relative;
          gap: 12px;
        }

        /* Logo */
        .logo-container {
          flex: 0 0 auto;
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: var(--transition);
        }

        .logo-link:hover {
          transform: translateY(-2px);
        }

        .logo-image {
          height: 60px;
          width: auto;
          object-fit: contain;
          transition: var(--transition);
          transform: scale(1.35);
          transform-origin: center;
        }

        .logo-image:hover {
          filter: drop-shadow(0 0 15px rgba(0, 102, 204, 0.6)) drop-shadow(0 0 25px rgba(0, 102, 204, 0.4));
          transform: scale(1.45);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .logo-main {
          font-size: 28px;
          font-weight: 800;
          color: var(--header-primary);
          letter-spacing: -0.5px;
        }

        .logo-sub {
          font-size: 14px;
          font-weight: 600;
          color: var(--header-text-light);
          letter-spacing: 1px;
        }

        /* Desktop Navigation */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          justify-content: center;
        }

        .nav-link {
          padding: 12px 20px;
          text-decoration: none;
          color: var(--header-text);
          font-weight: 600;
          font-size: 15px;
          border-radius: 8px;
          transition: var(--transition);
          position: relative;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: var(--header-primary);
          background: var(--header-light);
        }

        .nav-link.active {
          color: var(--header-primary);
          background: var(--header-light);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: var(--header-primary);
          border-radius: 50%;
        }

        /* Dropdown */
        .dropdown-container {
          position: relative;
          padding-bottom: 0;
        }

        .dropdown-container::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: 180px;
          pointer-events: none;
        }

        .dropdown-btn {
          padding: 12px 20px;
          background: none;
          border: none;
          color: var(--header-text);
          font-weight: 600;
          font-size: 15px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: var(--transition);
          font-family: inherit;
          white-space: nowrap;
          text-decoration: none;
        }

        .dropdown-btn:hover,
        .dropdown-btn.active {
          color: var(--header-primary);
          background: var(--header-light);
        }

        .dropdown-icon {
          transition: transform 0.3s ease;
        }

        .dropdown-icon.rotated {
          transform: rotate(180deg);
        }

        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 0;
          background: var(--white);
          border-radius: 12px;
          box-shadow: var(--shadow-lg);
          min-width: 240px;
          padding: 8px 0;
          animation: slideDown 0.3s ease;
          border: 1px solid rgba(0, 102, 204, 0.1);
          z-index: 100;
          pointer-events: auto;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-item {
          display: block;
          padding: 12px 24px;
          color: var(--header-text);
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          transition: var(--transition);
        }

        .dropdown-item:hover {
          color: var(--header-primary);
          background: var(--header-light);
        }

        /* CTA Button */
        .cta-button {
          padding: 12px 28px;
          background: linear-gradient(135deg, var(--header-primary) 0%, var(--header-secondary) 100%);
          color: var(--white);
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
          white-space: nowrap;
          margin-left: 20px;
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.2);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 102, 204, 0.3);
          background: linear-gradient(135deg, var(--header-secondary) 0%, var(--header-primary) 100%);
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 1001;
        }

        .menu-icon {
          width: 24px;
          height: 18px;
          position: relative;
        }

        .menu-icon span {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: var(--header-primary);
          border-radius: 2px;
          transition: var(--transition);
        }

        .menu-icon span:nth-child(1) {
          top: 0;
        }

        .menu-icon span:nth-child(2) {
          top: 8px;
        }

        .menu-icon span:nth-child(3) {
          top: 16px;
        }

        .menu-icon.open {
          display: none;
        }

        /* Mobile Navigation */
        .mobile-nav {
          display: none !important;
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          background: var(--white);
          box-shadow: var(--shadow-lg);
          padding: 15px 0;
          transform: translateY(-100%);
          transition: transform 0.3s ease;
          z-index: 998;
          max-height: calc(100vh - 70px);
          overflow-y: auto;
          width: 100%;
        }

        .mobile-nav.open {
          transform: translateY(0);
          display: block !important;
        }

        .mobile-nav-content {
          padding: 0 20px;
        }

        .mobile-close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          margin-bottom: 10px;
          margin-left: auto;
          margin-right: 0;
        }

        .mobile-close-btn span {
          position: absolute;
          width: 24px;
          height: 2px;
          background: var(--header-primary);
          border-radius: 2px;
          transition: var(--transition);
        }

        .mobile-close-btn span:nth-child(1) {
          transform: rotate(45deg);
        }

        .mobile-close-btn span:nth-child(2) {
          transform: rotate(-45deg);
        }

        .mobile-close-btn:hover span {
          background: var(--header-secondary);
        }

        .mobile-nav-link {
          display: block;
          padding: 14px 0;
          text-decoration: none;
          color: var(--header-text);
          font-weight: 600;
          font-size: 15px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          transition: var(--transition);
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--header-primary);
        }

        .mobile-dropdown {
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .mobile-dropdown-btn {
          width: 100%;
          padding: 14px 0;
          background: none;
          border: none;
          color: var(--header-text);
          font-weight: 600;
          font-size: 15px;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: inherit;
        }

        .mobile-dropdown-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .mobile-dropdown-content.open {
          max-height: 300px;
        }

        .mobile-dropdown-item {
          display: block;
          padding: 12px 20px;
          text-decoration: none;
          color: var(--header-text-light);
          font-size: 15px;
          transition: var(--transition);
        }

        .mobile-dropdown-item:hover {
          color: var(--header-primary);
          padding-left: 30px;
        }

        /* Mobile CTA Button */
        .mobile-cta-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 20px 0 10px 0;
          padding: 14px 24px;
          background: linear-gradient(135deg, var(--header-primary) 0%, var(--header-secondary) 100%);
          color: var(--white);
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          transition: var(--transition);
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
        }

        .mobile-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 102, 204, 0.4);
          background: linear-gradient(135deg, var(--header-secondary) 0%, var(--header-primary) 100%);
        }

        .mobile-cta-button:active {
          transform: translateY(0);
        }

        .mobile-contact-info {
          margin-top: 20px;
          padding-top: 15px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .mobile-contact-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          text-decoration: none;
          color: var(--header-text);
          font-size: 14px;
          transition: var(--transition);
        }

        .mobile-contact-link:hover {
          color: var(--header-primary);
        }

        .mobile-contact-link svg {
          color: var(--header-primary);
          flex-shrink: 0;
        }

        /* ================= RESPONSIVE STYLES ================= */
        @media (max-width: 1200px) {
          .container {
            padding: 0 30px;
          }

          .desktop-nav {
            gap: 4px;
          }

          .nav-link {
            padding: 12px 16px;
            font-size: 14px;
          }

          .dropdown-btn {
            padding: 12px 16px;
            font-size: 14px;
          }

          .cta-button {
            padding: 8px 16px;
            font-size: 14px;
            border-radius: 36px;
            margin-left: 8px;
            gap: 6px;
          }

          .cta-button svg {
            width: 16px;
            height: 16px;
          }
        }

        @media (max-width: 992px) {
          .container {
            padding: 0 20px;
          }

          .desktop-nav {
            display: none;
          }

          .cta-button {
            display: none !important;
          }

          .mobile-menu-btn {
            display: block;
          }

          .logo-text {
            display: none;
          }

          .nav-container {
            gap: 8px;
          }
        }

        @media (max-width: 768px) {
          .logo-image {
            height: 50px;
          }

          .mobile-nav-content {
            padding: 0 20px;
          }

          .nav-container {
            padding: 10px 0;
            gap: 10px;
          }

          .mobile-nav {
            top: 70px;
            padding: 12px 0;
            max-height: calc(100vh - 70px);
          }

          .mobile-cta-button {
            padding: 13px 22px;
            font-size: 15px;
          }
        }

        @media (max-width: 600px) {
          .mobile-cta-button {
            padding: 12px 20px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 12px;
          }

          .logo-image {
            height: 45px;
          }

          .nav-container {
            padding: 8px 0;
            gap: 8px;
          }

          .mobile-nav {
            top: 61px;
            padding: 10px 0;
            max-height: calc(100vh - 61px);
          }

          .mobile-nav-link {
            font-size: 14px;
            padding: 12px 0;
          }

          .mobile-dropdown-btn {
            font-size: 14px;
            padding: 12px 0;
          }

          .mobile-contact-info {
            margin-top: 15px;
            padding-top: 12px;
          }

          .mobile-contact-link {
            font-size: 13px;
            padding: 10px 0;
          }

          .mobile-cta-button {
            padding: 12px 20px;
            font-size: 14px;
            margin: 15px 0 8px 0;
          }
        }
      `}</style>
    <header className="header">
      {/* Main Navigation */}
      <div className="header-main">
        <div className="container">
          <div className="nav-container">
            {/* Logo */}
            <div className="logo-container">
              <Link to="/" className="logo-link">
                <img src={logo} alt="Proforma Insights" className="logo-image" />
                <div className="logo-text">
                  <span className="logo-main">Proforma</span>
                  <span className="logo-sub">Insights</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <Link
                to="/"
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About Us
              </Link>

              <div
                className="dropdown-container"
                onMouseEnter={() => handleServicesHover(true)}
                onMouseLeave={() => handleServicesHover(false)}
              >
                <Link
                  to="/services"
                  className={`dropdown-btn ${servicesDropdown ? 'active' : ''} ${location.pathname === '/services' ? 'active' : ''}`}
                >
                  Our Services
                  <ChevronDown size={16} className={`dropdown-icon ${servicesDropdown ? 'rotated' : ''}`} />
                </Link>

                {servicesDropdown && (
                  <div className="dropdown-content">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="dropdown-item"
                        onClick={handleServiceSelect}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/team"
                className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}
              >
                Our Team
              </Link>

              <Link to="/insights" className={`nav-link ${location.pathname === '/insights' ? 'active' : ''}`}>
                Insights
              </Link>

              <Link
                to="/contact"
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <Link to="/contact#inquiry" className="cta-button" onClick={() => {
              if (location.pathname === '/contact') {
                const el = document.getElementById('inquiry');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}>
              <Phone size={16} />
              Get Consultation
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <div className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <button
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span></span>
              <span></span>
            </button>

            <Link
              to="/"
              className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <div className="mobile-dropdown">
              <button
                className="mobile-dropdown-btn"
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                Our Services
                <ChevronDown size={16} className={`dropdown-icon ${servicesDropdown ? 'rotated' : ''}`} />
              </button>

              <div className={`mobile-dropdown-content ${servicesDropdown ? 'open' : ''}`}>
                <Link
                  to="/services"
                  className="mobile-dropdown-item"
                  onClick={handleServiceSelect}
                >
                  All Services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="mobile-dropdown-item"
                    onClick={handleServiceSelect}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/team"
              className={`mobile-nav-link ${location.pathname === '/team' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Team
            </Link>


            <Link to="/insights" className={`mobile-nav-link ${location.pathname === '/insights' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Insights
            </Link>


            <Link
              to="/contact"
              className={`mobile-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            {/* Mobile CTA Button */}
            <Link 
              to="/contact#inquiry" 
              className="mobile-cta-button" 
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (location.pathname === '/contact') {
                  setTimeout(() => {
                    const el = document.getElementById('inquiry');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }, 100);
                }
              }}
            >
              <Phone size={18} />
              Get Consultation
            </Link>

            <div className="mobile-contact-info">
              <a href="tel:+977061545445" className="mobile-contact-link">
                <Phone size={18} />
                <span>061-545445</span>
              </a>



              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=proformadigitaltech@gmail.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-contact-link"
                title="Send Email" >
                <Mail size={18} />
                proformadigitaltech@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}