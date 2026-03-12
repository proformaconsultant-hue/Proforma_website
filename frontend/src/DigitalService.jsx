import React from 'react';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Sparkles, Target, Search, Users, FileText, TrendingUp, BarChart, ArrowRight } from 'lucide-react';
import digitalImage from './images/digitalrocket.png';
import { Link } from 'react-router-dom';

export const DigitalService = () => {
  const features = [
    {
      icon: <Target size={24} />,
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital strategy development tailored to your business objectives"
    },
    {
      icon: <Search size={24} />,
      title: "SEO Optimization",
      description: "Search engine optimization to improve organic visibility and drive targeted traffic"
    },
    {
      icon: <Users size={24} />,
      title: "Social Media Management",
      description: "Strategic social media campaigns and community management across platforms"
    },
    {
      icon: <FileText size={24} />,
      title: "Content Marketing",
      description: "High-quality content creation and distribution to engage your audience"
    }
  ];

  return (
    <div className="digital-service-page">
      <Header />
      
      {/* Hero Section */}
      <div className="digital-service-hero-section">
        <div className="hero-content">
          <h1 className="digital-service-hero-title">
          
            Digital Services
          </h1>
          <p className="digital-service-hero-subtitle">
            Cutting-edge digital solutions to enhance your online presence and drive business growth
          </p>
        </div>
      </div>

      <div className="container">
        {/* Content Section */}
        <div className="digital-service-content-section">
          <h2 className="digital-service-content-title">Our Digital Services</h2>
          
          <div className="services-container">
            <div className="services-left">
              <ul className="digital-services-list">
                <li>Digital Marketing Strategy and Planning</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Social Media Marketing and Management</li>
                <li>Content Creation and Marketing</li>
                <li>Pay-Per-Click (PPC) Advertising</li>
                <li>Web Analytics and Performance Tracking</li>
                <li>Email Marketing Campaigns</li>
                <li>Brand Development and Positioning</li>
              </ul>
            </div>
            <div className="services-right">
              <div className="digital-services-image">
                <img src={digitalImage} alt="Digital Marketing Services" />
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
            <p className="digital-service-content-text">
              At Proforma Insights, we provide comprehensive digital services to help businesses thrive in today's digital landscape. 
              Our team of digital marketing experts specializes in developing innovative strategies that drive online visibility, 
              engagement, and sustainable growth. From strategic SEO implementation to targeted social media campaigns, 
              we deliver measurable results that align with your business objectives.
            </p>
          </div>

          {/* CTA Section */}
          <div className="service-cta">
            <h3 className="cta-title">Ready to Elevate Your Digital Presence?</h3>
            <p className="cta-subtitle">
              Let's collaborate to create a digital strategy that delivers results and positions your brand for success in the digital marketplace.
            </p>
            <Link to="/contact" className="cta-button">
              Start Digital Transformation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}