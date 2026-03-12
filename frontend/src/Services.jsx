import React, { useState, useEffect } from 'react';
import './Services.css';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { ArrowRight, Calculator, FileText, Cpu, TrendingUp, Briefcase, CheckCircle, Users, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import api from './services/api';

// Icon mapping
const iconMap = {
  'Calculator': Calculator,
  'FileText': FileText,
  'Cpu': Cpu,
  'Monitor': Cpu,
  'TrendingUp': TrendingUp,
  'Briefcase': Briefcase,
  'Users': Users,
};

export const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await api.getServices();
        if (data && data.length > 0) {
          setServices(data);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const benefits = [
    { icon: <Users size={24} />, text: "Expert Team of Professionals" },
    { icon: <Clock size={24} />, text: "Timely Delivery & Support" },
    { icon: <CheckCircle size={24} />, text: "Quality Assurance Guaranteed" },
    { icon: <Award size={24} />, text: "Industry Best Practices" }
  ];

  return (
    <div className="services-page">
      <Header />

      {/* Hero Section with Overlay */}
      <div className="services-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">

              Our Services
            </h1>
            <p className="hero-subtitle">
              Comprehensive business solutions designed to drive growth, efficiency, and success for your organization
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="services-benefits">
        <div className="container">
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <p className="benefit-text">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="services-main">
        <div className="container">
          <div className="services-header">
            <h2 className="services-section-title">Our Expertise</h2>
            <p className="services-section-subtitle">
              We provide end-to-end business solutions that combine strategic insight with practical implementation
            </p>
          </div>

          <div className="services-grid">
            {loading ? (
              <div style={{ padding: '50px', textAlign: 'center', gridColumn: '1 / -1' }}>
                Loading services...
              </div>
            ) : services.length === 0 ? (
              <div style={{ padding: '50px', textAlign: 'center', gridColumn: '1 / -1' }}>
                No services available at the moment.
              </div>
            ) : (
              services.map((service) => {
                const IconComponent = iconMap[service.icon_name] || Briefcase;
                return (
                  <div key={service.id} className="service-card">
                    <div className="service-card-header">
                      <div className="service-icon" style={{ color: service.color || '#0066cc' }}>
                        <IconComponent size={32} />
                      </div>
                      <h3 className="service-title">{service.title}</h3>
                    </div>

                    <p className="service-description">{service.short_description || service.full_description}</p>

                    <div className="service-features">
                      <h4 className="features-title">Key Features</h4>
                      <ul className="features-list">
                        {service.features && service.features.map((feature, index) => (
                          <li key={index} className="feature-item">
                            <CheckCircle size={16} />
                            <span>{typeof feature === 'string' ? feature : feature.title || feature.name || ''}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to={`/${service.slug}`} className="service-link">
                      Explore Service
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container">
        <div className="services-cta">
          <div className="cta-content">
            <h2 className="cta-main-title">Ready to Transform Your Business?</h2>
            <p className="cta-main-subtitle">
              Let's discuss how our comprehensive services can help your business objectives and drive sustainable growth.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                Get Free Consultation
              </Link>
              <a href="tel:+977061545445" className="cta-button secondary">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}