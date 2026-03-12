import { useState, useEffect } from 'react'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { StatsCounter } from './components/StatsCounter.jsx'
import { 
  Award, Users, Clock, Target, CheckCircle, TrendingUp, 
  Shield, Heart, Lightbulb, Zap, Handshake 
} from 'lucide-react'
import aboutImage from './images/proforma-office.jpg'
import { Link } from 'react-router-dom'
import api from './services/api'

export const AboutPage = () => {
  const [companyInfo, setCompanyInfo] = useState(null);
  const [coreValues, setCoreValues] = useState([]);
  const [workEnvironmentImages, setWorkEnvironmentImages] = useState([]);
  const [whyChooseUs, setWhyChooseUs] = useState(null);
  const [loading, setLoading] = useState(true);

  // Icon mapping for dynamic values
  const iconMap = {
    'Award': Award,
    'Users': Users,
    'Clock': Clock,
    'Target': Target,
    'TrendingUp': TrendingUp,
    'Shield': Shield,
    'Heart': Heart,
    'Lightbulb': Lightbulb,
    'Zap': Zap,
    'Handshake': Handshake,
    'CheckCircle': CheckCircle
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [companyData, valuesData, imagesData, whyChooseData] = await Promise.all([
          api.getCompanyInfo(),
          api.getCoreValues(),
          api.getWorkEnvironmentImages(),
          api.getWhyChooseUs()
        ]);
        
        if (companyData) setCompanyInfo(companyData);
        if (valuesData) setCoreValues(valuesData);
        if (imagesData) setWorkEnvironmentImages(imagesData);
        if (whyChooseData) setWhyChooseUs(whyChooseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="about-page">
        <Header />
        <div style={{ padding: '100px', textAlign: 'center' }}>Loading...</div>
        <Footer />
      </div>
    );
  }

  if (!companyInfo) {
    return (
      <div className="about-page">
        <Header />
        <div style={{ padding: '100px', textAlign: 'center' }}>Company information not available</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="about-page">
      <Header />
      <StatsCounter />
      
      {/* Main Content */}
      <div className="about-container">
        {/* About Us Title */}
        <h2 className="about-us-title">About Us</h2>
        
        {/* Merged About Us Section */}
        <div className="about-us-card-section">
          <div className="about-us-content-wrapper">
            <div className="about-us-image-container">
              <img src={aboutImage} alt="About Us - Professional Team" className="about-us-image" />
            </div>
            <div className="about-us-content">
              <h3 className="about-us-subtitle">{companyInfo.hero_title}</h3>
              <p className="about-us-description">
                {companyInfo.hero_subtitle}
              </p>
              <p className="about-us-history">
                {companyInfo.history_text}
              </p>
              <div className="about-us-highlights">
                <div className="about-us-highlight-item">
                  <TrendingUp size={28} />
                  <span>Over a decade of excellence</span>
                </div>
                <div className="about-us-highlight-item">
                  <CheckCircle size={28} />
                  <span>Satisfied clients</span>
                </div>
              </div>
              {/* <div className="about-us-cta-buttons">
                <Link to="/contact" className="about-us-btn primary">Get Consultation</Link>
                <Link to="/services" className="about-us-btn secondary">Learn More</Link>
              </div> */}
            </div>
          </div>
        </div>


        {/* Values Section */}
        <div className="about-values-section">
          <h2 className="about-section-title">Our Core Values</h2>
          <div className="about-values-grid">
            {coreValues.map((value) => {
              const IconComponent = iconMap[value.icon_name] || Award;
              return (
                <div key={value.id} className="about-value-card">
                  <div className="about-value-icon">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="about-value-title">{value.title}</h3>
                  <p className="about-value-description">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="about-gallery-section">
          <h2 className="about-section-title">Our Work Environment</h2>
          <div className="about-gallery-grid">
            {workEnvironmentImages.map((item) => (
              <div key={item.id} className="about-gallery-item">
                <img src={item.image} alt={item.title} />
                <div className="about-gallery-overlay">
                  <span>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="about-why-choose-section">
          <div className="about-why-choose-content">
            <h2 className="about-section-title">Why Choose Proforma Insights?</h2>
            <div className="about-benefits-grid">
              <div className="about-benefits-list">
                <h3 className="about-benefits-title">Key Advantages</h3>
                <ul className="about-benefits-items">
                  {whyChooseUs?.key_advantages && whyChooseUs.key_advantages.map((advantage, index) => (
                    <li key={index} className="about-benefit-item">
                      <CheckCircle size={20} />
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="about-benefits-summary">
                <h3 className="about-summary-title">
                  {whyChooseUs?.partner_title || 'Your Trusted Partner'}
                </h3>
                <p className="about-summary-text">
                  {whyChooseUs?.partner_description || 'We combine deep industry knowledge with innovative solutions to deliver exceptional value to our clients.'}
                </p>
               
                <div className="about-summary-points">
                  {whyChooseUs?.numbered_points && whyChooseUs.numbered_points.map((point, index) => (
                    <div key={index} className="about-point">
                      <div className="about-point-number">{String(index + 1).padStart(2, '0')}</div>
                      <div className="about-point-content">
                        <h4>{point.title}</h4>
                        <p>{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="about-cta-section">
          <div className="about-cta-content">
            <h2 className="about-cta-title">Ready to Transform Your Business?</h2>
            <p className="about-cta-subtitle">
              Partner with Nepal's leading business consultancy to unlock your organization's full potential 
              and achieve sustainable success.
            </p>
            <div className="about-cta-buttons">
              <Link to="/contact" className="about-cta-button secondary">Get Consultation</Link>
              <Link to="/services" className="about-cta-button secondary">Our Services</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}