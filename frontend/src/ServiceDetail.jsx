import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { ArrowRight, CheckCircle } from 'lucide-react';
import api from './services/api';

export const ServiceDetail = () => {
  const location = useLocation();
  const slug = location.pathname.substring(1); // Remove leading slash
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        console.log('Fetching service with slug:', slug);
        setLoading(true);
        const data = await api.getService(slug);
        console.log('Service data received:', data);
        setService(data);
      } catch (err) {
        console.error('Error fetching service:', err);
        setError('Service not found');
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  if (loading) {
    return (
      <div className="accounting-page">
        <Header />
        <div className="container" style={{ padding: '200px 20px', textAlign: 'center', minHeight: '60vh' }}>
          <h2>Loading service details...</h2>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="accounting-page">
        <Header />
        <div className="container" style={{ padding: '200px 20px', textAlign: 'center', minHeight: '60vh' }}>
          <h2>Service Not Found</h2>
          <p>{error || 'The requested service could not be found.'}</p>
          <p>Slug: {slug}</p>
          <Link to="/services" className="cta-button" style={{ marginTop: '20px', display: 'inline-flex' }}>
            Back to Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  console.log('Rendering service:', service);

  return (
    <div className="accounting-page">
      <Header />
      
      {/* Hero Section */}
      <div className="accounting-hero-section">
        <div className="hero-content">
          <h1 className="accounting-hero-title">
            {service.hero_title || service.title}
          </h1>
          <p className="accounting-hero-subtitle">
            {service.hero_subtitle || service.short_description}
          </p>
        </div>
      </div>

      <div className="container">
        {/* Content Section */}
        <div className="accounting-content-section">
          <h2 className="accounting-content-title">
            Our {service.title}
          </h2>
          
          <div className="services-container">
            <div className="services-left">
              {/* Content Block - Full Description */}
              {service.full_description && (
                <div style={{ marginBottom: '30px' }}>
                  <p style={{ 
                    fontSize: '18px', 
                    lineHeight: '1.8', 
                    color: '#333',
                    textAlign: 'justify',
                    fontWeight: '600'
                  }}>
                    {service.full_description}
                  </p>
                </div>
              )}

              <ul className="accounting-services-list">
                {service.services_list && service.services_list.length > 0 ? (
                  service.services_list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                ) : service.features && service.features.length > 0 ? (
                  service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))
                ) : (
                  <li>No services listed</li>
                )}
              </ul>
            </div>
            <div className="services-right">
              {service.detail_image ? (
                <div className="accounting-services-image">
                  <img src={service.detail_image} alt={service.title} />
                </div>
              ) : service.image ? (
                <div className="accounting-services-image">
                  <img src={service.image} alt={service.title} />
                </div>
              ) : null}
            </div>
          </div>

          {/* Features Grid */}
          {service.features && service.features.length > 0 && (
            <div className="service-features-grid">
              {service.features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <h3 className="feature-title">
                    <CheckCircle size={20} />
                    {feature}
                  </h3>
                </div>
              ))}
            </div>
          )}

          {/* Content Block - Detail Content */}
          {service.detail_content && service.detail_content !== service.full_description && (
            <div className="services-content-block">
              <p className="accounting-content-text">
                {service.detail_content}
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="service-cta">
            <h3 className="cta-title">Ready to Get Started?</h3>
            <p className="cta-subtitle">
              Partner with our experts to achieve your business goals with our {service.title.toLowerCase()}.
            </p>
            <Link to="/contact" className="cta-button">
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
