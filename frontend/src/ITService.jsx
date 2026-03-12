import React from "react";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Sparkles, Cpu, Shield, Cloud, Code, Server, ArrowRight } from "lucide-react";
import itImage from "./images/it-service.png";
import { Link } from "react-router-dom";

export const ITService = () => {
  const features = [
    {
      icon: <Cpu size={24} />,
      title: "IT Consulting",
      description: "Strategic IT consulting to align technology with your business objectives"
    },
    {
      icon: <Shield size={24} />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets"
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Solutions",
      description: "Cloud migration, management, and optimization services"
    },
    {
      icon: <Code size={24} />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs"
    }
  ];

  return (
    <div className="it-service-page">
      <Header />
      
      {/* Hero Section */}
      <div className="it-service-hero-section">
        <div className="hero-content">
          <h1 className="it-service-hero-title">
           
            IT Services
          </h1>
          <p className="it-service-hero-subtitle">
            Innovative technology solutions to drive efficiency, security, and business growth
          </p>
        </div>
      </div>

      <div className="container">
        {/* Content Section */}
        <div className="it-service-content-section">
          <h2 className="it-service-content-title">Our IT Services</h2>
          
          <div className="services-container">
            <div className="services-left">
              <ul className="it-services-list">
                <li>IT Strategy Consulting and Digital Transformation</li>
                <li>Network Infrastructure Design and Implementation</li>
                <li>Cybersecurity Assessment and Protection Services</li>
                <li>Cloud Migration and Management Solutions</li>
                <li>Custom Software Development and Integration</li>
                <li>IT Support and Help Desk Services</li>
                <li>Data Backup and Disaster Recovery Planning</li>
                <li>IT Infrastructure Monitoring and Maintenance</li>
              </ul>
            </div>
            <div className="services-right">
              <div className="it-services-image">
                <img src={itImage} alt="IT Services" />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="service-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h3 className="feature-title">
                  {feature.icon}
                  {feature.title}
                </h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Content Block */}
          <div className="services-content-block">
            <p className="it-service-content-text">
              At Proforma Insights, we offer comprehensive IT services designed to help businesses leverage 
              technology for enhanced efficiency and competitive advantage. Our team of IT professionals 
              specializes in delivering customized solutions that align with your specific business objectives. 
              From strategic IT consulting to robust cybersecurity measures, we provide end-to-end services 
              that ensure your technology infrastructure is secure, scalable, and optimized for performance.
            </p>
          </div>

          {/* CTA Section */}
          <div className="service-cta">
            <h3 className="cta-title">Transform Your Technology Infrastructure</h3>
            <p className="cta-subtitle">
              Partner with our IT experts to build a robust, secure, and efficient technology foundation 
              that supports your business growth and innovation.
            </p>
            <Link to="/contact" className="cta-button">
              Explore IT Solutions
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}