import React from 'react'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { StatsCounter } from './components/StatsCounter.jsx'
import { CheckCircle, TrendingUp } from 'lucide-react'
import aboutImage from './images/Proforma-about.jpg'
import logo1 from './images/team-collab.jpg'
import logo2 from './images/modern-infra.jpg'
import logo3 from './images/client-consult.jpg'
import logo4 from './images/strategic-planning.webp'
import { Link } from 'react-router-dom'

const aboutPageStyles = `
  /* ================= ABOUT PAGE ================= */
  .about-page {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, #f8fafc 0%, #e6f2ff 100%);
    overflow-x: hidden;
    padding-top: 135px;
  }

  .about-container {
    max-width: 1400px;
    margin: 50px auto 0 auto;
    padding: 40px;
    width: 100%;
    box-sizing: border-box;
    background: linear-gradient(135deg, #ffffff 0%, #f8fbff 100%);
    border-radius: 25px;
    border: 2px solid rgba(0, 102, 204, 0.1);
    box-shadow: 0 8px 32px rgba(0, 102, 204, 0.08);
  }

  /* About Us Card Section - Merged About & History */
  .about-us-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #0066cc;
    text-align: center;
    margin: 40px 0 30px 0;
    line-height: 1.2;
    padding: 0 20px;
  }

  .about-us-card-section {
    padding: 25px;
    margin: 0 0 50px 0;
    background: white;
    border-radius: 25px;
    box-shadow: 0 10px 40px rgba(0, 51, 102, 0.12);
    overflow: visible;
  }

  .about-us-title-container {
    display: none;
  }

  .about-us-main-title {
    display: none;
  }

  .about-us-content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: stretch;
    padding: 0;
    border-radius: 0;
    box-shadow: none;
    overflow: visible;
  }

  .about-us-image-container {
    position: relative;
    height: 100%;
    min-height: 350px;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 8px 25px rgba(0, 51, 102, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about-us-image-container:hover {
    box-shadow: 0 15px 40px rgba(0, 51, 102, 0.15);
    transform: translateY(-5px);
  }

  .about-us-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    display: block;
    flex-shrink: 0;
  }

  .about-us-image-container:hover .about-us-image {
    transform: scale(1.05);
  }

  .about-us-content {
    padding: 35px 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 350px;
    background: linear-gradient(135deg, #f8fafc 0%, #e6f2ff 100%);
    color: black;
    border-radius: 20px;
    box-shadow: 0 8px 25px rgba(0, 51, 102, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }

  .about-us-content:hover {
    box-shadow: 0 15px 40px rgba(0, 51, 102, 0.15);
    transform: translateY(-5px);
  }

  .about-us-subtitle {
    font-size: 1.45rem;
    color: #0066cc;
    margin-bottom: 15px;
    font-weight: 700;
    line-height: 1.3;
  }

  .about-us-description {
    font-size: 0.95rem;
    color: #000000;
    line-height: 1.7;
    margin-bottom: 12px;
    text-align: left;
  }

  .about-us-history {
    font-size: 0.95rem;
    color: #000000;
    line-height: 1.7;
    margin-bottom: 12px;
    text-align: left;
  }

  .about-us-highlights {
    display: flex;
    gap: 25px;
    margin: 15px 0 20px 0;
    flex-wrap: wrap;
  }

  .about-us-highlight-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.95rem;
    color: #0066cc;
    font-weight: 600;
  }

  .about-us-highlight-item svg {
    color: #0066cc;
    flex-shrink: 0;
    min-width: 24px;
  }

  .about-us-cta-buttons {
    display: flex;
    gap: 15px;
    margin-top: auto;
    flex-wrap: wrap;
  }

  .about-us-btn {
    padding: 9px 24px;
    border: none;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    display: inline-block;
  }

  .about-us-btn.primary {
    background: linear-gradient(135deg, #0066cc, #0052a3);
    color: white;
    box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
  }

  .about-us-btn.primary:hover {
    background: linear-gradient(135deg, #0052a3, #003d7a);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 102, 204, 0.4);
  }

  .about-us-btn.secondary {
    background: #e6f2ff;
    color: #0066cc;
    border: 2px solid #0066cc;
  }

  .about-us-btn.secondary:hover {
    background: #0066cc;
    color: white;
    transform: translateY(-2px);
  }

  /* About Gallery Section */
  .about-gallery-section {
    padding: 80px 0;
  }

  .about-section-title {
    font-size: 2.5rem;
    color: #1a365d;
    margin-bottom: 2rem;
    position: relative;
    font-weight: 700;
    text-align: center;
  }

  .about-section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translate(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #0066cc, #4da6ff);
    border-radius: 2px;
  }

  .about-gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 40px;
  }

  .about-gallery-item {
    position: relative;
    height: 250px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 51, 102, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .about-gallery-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 51, 102, 0.15);
  }

  .about-gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.6s ease;
  }

  .about-gallery-item:hover img {
    transform: scale(1.1);
  }

  .about-gallery-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    color: white;
    font-weight: 600;
    font-size: 1rem;
  }

  /* About Why Choose Us Section */
  .about-why-choose-section {
    padding: 80px 0;
    background: white;
    border-radius: 16px;
    margin: 40px 0;
    box-shadow: 0 10px 30px rgba(0, 51, 102, 0.1);
  }

  .about-why-choose-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .about-benefits-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    margin-top: 40px;
    align-items: start;
  }

  .about-benefits-list {
    background: #e6f2ff;
    border-radius: 12px;
    padding: 40px;
  }

  .about-benefits-title {
    font-size: 1.8rem;
    color: #1a365d;
    margin-bottom: 25px;
    font-weight: 700;
  }

  .about-benefits-items {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .about-benefit-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 20px;
    font-size: 1rem;
    color: #718096;
    line-height: 1.6;
  }

  .about-benefit-item svg {
    color: #0066cc;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .about-benefits-summary {
    padding: 40px 35px;
    background: linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, rgba(77, 166, 255, 0.05) 100%);
    border-radius: 16px;
    border-left: 5px solid #0066cc;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .about-benefits-summary:hover {
    background: linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(77, 166, 255, 0.1) 100%);
    box-shadow: 0 10px 30px rgba(0, 102, 204, 0.15);
    transform: translateY(-2px);
  }

  .about-summary-title {
    font-size: 2rem;
    color: #0066cc;
    margin-bottom: 30px;
    font-weight: 800;
    position: relative;
    padding-bottom: 15px;
  }

  .about-summary-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #0066cc, #4da6ff);
    border-radius: 2px;
  }

  .about-summary-text {
    color: #4a5568;
    line-height: 1.9;
    margin-bottom: 24px;
    font-size: 1.05rem;
    padding: 15px 0;
    letter-spacing: 0.3px;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .about-summary-text:hover {
    color: #2d3748;
  }

  .about-summary-points {
    margin-top: 30px;
  }

  .about-point {
    display: flex;
    gap: 20px;
    margin-bottom: 25px;
    padding: 20px;
    background: #e6f2ff;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .about-point:hover {
    background: white;
    box-shadow: 0 10px 30px rgba(0, 51, 102, 0.1);
    transform: translateX(10px);
  }

  .about-point-number {
    font-size: 2rem;
    font-weight: 800;
    color: #0066cc;
    line-height: 1;
  }

  .about-point-content h4 {
    font-size: 1.2rem;
    color: #1a365d;
    margin-bottom: 5px;
    font-weight: 600;
  }

  .about-point-content p {
    color: #718096;
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
  }

  /* About CTA Section */
  .about-cta-section {
    background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
    border-radius: 16px;
    padding: 80px 40px;
    text-align: center;
    color: white;
    margin: 80px 0;
    position: relative;
    overflow: hidden;
  }

  .about-cta-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 Z" fill="rgba(255,255,255,0.1)"/></svg>');
    background-size: cover;
  }

  .about-cta-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
  }

  .about-cta-title {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  .about-cta-subtitle {
    font-size: 1.25rem;
    opacity: 0.9;
    margin-bottom: 40px;
    line-height: 1.6;
  }

  .about-cta-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .about-cta-button {
    padding: 16px 40px;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 180px;
  }

  .about-cta-button.primary {
    background: white;
    color: #0066cc;
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
  }

  .about-cta-button.primary:hover {
    background: #4da6ff;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(255, 255, 255, 0.3);
  }

  .about-cta-button.secondary {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
  }

  .about-cta-button.secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: white;
    transform: translateY(-3px);
  }

  /* Responsive About Page */
  @media (max-width: 1024px) {
    .about-container {
      padding: 30px;
      margin: 40px auto 0 auto;
    }

    .about-us-title {
      font-size: 2rem;
      margin: 30px 0 25px 0;
    }

    .about-us-card-section {
      padding: 20px;
    }

    .about-us-content-wrapper {
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    .about-us-image-container {
      min-height: 300px;
    }

    .about-us-content {
      padding: 30px 30px;
      min-height: 300px;
    }

    .about-benefits-grid {
      gap: 40px;
    }
  }

  @media (max-width: 992px) {
    .about-us-content-wrapper {
      grid-template-columns: 1fr;
    }

    .about-us-image-container {
      min-height: 350px;
    }

    .about-us-title {
      font-size: 2.2rem;
    }

    .about-section-title {
      font-size: 2.2rem;
    }

    .about-benefits-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  @media (max-width: 768px) {
    .about-page {
      padding-top: 120px;
    }

    .about-container {
      padding: 0 20px;
    }

    .about-us-content-wrapper {
      grid-template-columns: 1fr;
      gap: 20px;
      border-radius: 12px;
    }

    .about-us-image-container {
      min-height: 250px;
    }

    .about-us-content {
      padding: 30px 20px;
    }

    .about-us-title {
      font-size: 1.8rem;
    }

    .about-us-subtitle {
      font-size: 1.1rem;
    }

    .about-section-title {
      font-size: 2rem;
    }

    .about-benefits-summary {
      padding: 35px 25px;
    }

    .about-summary-title {
      font-size: 1.8rem;
    }

    .about-summary-text {
      font-size: 1rem;
      padding: 12px 0;
    }

    .about-benefits-list {
      padding: 25px;
    }

    .about-gallery-grid {
      grid-template-columns: 1fr;
    }

    .about-gallery-item {
      height: 200px;
    }

    .about-cta-section {
      padding: 50px 20px;
    }

    .about-cta-title {
      font-size: 2rem;
    }

    .about-cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .about-cta-button {
      width: 100%;
      max-width: 300px;
    }
  }

  @media (max-width: 640px) {
    .about-container {
      padding: 20px;
      margin: 30px auto 0 auto;
    }

    .about-us-title {
      font-size: 1.8rem;
      margin: 25px 0 20px 0;
    }

    .about-us-card-section {
      padding: 15px;
      margin: 0 0 30px 0;
    }

    .about-us-content-wrapper {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .about-us-image-container {
      min-height: 250px;
      order: -1;
    }

    .about-us-content {
      padding: 25px 25px;
      min-height: 250px;
    }

    .about-us-subtitle {
      font-size: 1.1rem;
    }

    .about-us-highlights {
      flex-direction: column;
      gap: 10px;
    }

    .about-us-cta-buttons {
      gap: 10px;
    }

    .about-us-btn {
      padding: 8px 20px;
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    .about-page {
      padding-top: 110px;
    }

    .about-container {
      padding: 0 15px;
    }

    .about-us-content {
      padding: 20px 15px;
    }

    .about-us-title {
      font-size: 1.5rem;
      margin: 20px 0 18px 0;
    }

    .about-us-card-section {
      padding: 12px;
      margin: 0 0 20px 0;
    }

    .about-us-content-wrapper {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .about-us-image-container {
      min-height: 220px;
      max-height: 220px;
    }

    .about-us-subtitle {
      font-size: 1rem;
      margin-bottom: 10px;
    }

    .about-us-description,
    .about-us-history {
      font-size: 0.85rem;
      margin-bottom: 8px;
    }

    .about-us-highlights {
      gap: 8px;
      margin: 10px 0 15px 0;
    }

    .about-us-highlight-item {
      font-size: 0.85rem;
      gap: 6px;
    }

    .about-us-btn {
      padding: 8px 16px;
      font-size: 0.8rem;
      width: 100%;
      text-align: center;
    }

    .about-section-title {
      font-size: 1.8rem;
    }

    .about-benefits-summary {
      padding: 28px 18px;
      border-left: 4px solid #0066cc;
    }

    .about-summary-title {
      font-size: 1.6rem;
      margin-bottom: 20px;
    }

    .about-cta-title {
      font-size: 1.8rem;
    }

    .about-cta-subtitle {
      font-size: 1.1rem;
    }
  }
`

export const NewAboutPage = () => {
  const benefits = [
    "Deep understanding of the Nepali business environment",
    "Experienced team of certified professionals",
    "Personalized solutions tailored to client needs",
    "Comprehensive service offerings under one roof",
    "Proven track record of client success",
    "Continuous support and guidance",
    "Proactive compliance management and risk mitigation",
    "Advanced technology integration for operations",
    "Transparent communication and regular updates",
    "Commitment to long-term partnerships",
    "Focus on sustainable growth and success"
  ];

  return (
    <div className="about-page">
      <style>{aboutPageStyles}</style>
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
              <h3 className="about-us-subtitle">Leading Business Consultant in Nepal</h3>
              <p className="about-us-description">
                Proforma Insights is Nepal's premier business & IT consultancy, offering expert tax planning, 
                accounting, compliance, and strategic consulting services with precision and dedication.
              </p>
              <p className="about-us-history">
                Founded in 2010, Proforma Insights has evolved from a small consultancy to a trusted leader in 
                Nepal's business landscape. Over the years, we have continuously expanded our expertise and 
                service portfolio to meet the evolving needs of our clients, helping them navigate complex 
                business challenges and achieve sustainable growth.
              </p>
              <div className="about-us-highlights">
                <div className="about-us-highlight-item">
                  <TrendingUp size={28} />
                  <span>Over a decade of excellence</span>
                </div>
                <div className="about-us-highlight-item">
                  <CheckCircle size={28} />
                  <span>500+ satisfied clients</span>
                </div>
              </div>
              <div className="about-us-cta-buttons">
                <Link to="/contact" className="about-us-btn primary">Get Consultation</Link>
                <Link to="/services" className="about-us-btn secondary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="about-gallery-section">
          <h2 className="about-section-title">Our Work Environment</h2>
          <div className="about-gallery-grid">
            <div className="about-gallery-item">
              <img src={logo1} alt="Professional Team Collaboration" />
              <div className="about-gallery-overlay">
                <span>Team Collaboration</span>
              </div>
            </div>
            <div className="about-gallery-item">
              <img src={logo2} alt="Modern Office Infrastructure" />
              <div className="about-gallery-overlay">
                <span>Modern Infrastructure</span>
              </div>
            </div>
            <div className="about-gallery-item">
              <img src={logo3} alt="Client Consultation" />
              <div className="about-gallery-overlay">
                <span>Client Consultation</span>
              </div>
            </div>
            <div className="about-gallery-item">
              <img src={logo4} alt="Strategic Planning" />
              <div className="about-gallery-overlay">
                <span>Strategic Planning</span>
              </div>
            </div>
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
                  {benefits.map((benefit, index) => (
                    <li key={index} className="about-benefit-item">
                      <CheckCircle size={20} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="about-benefits-summary">
                <h3 className="about-summary-title">Your Trusted Partner</h3>
                <p className="about-summary-text">
                  We combine deep industry knowledge with innovative solutions to deliver exceptional value 
                  to our clients. Our client-centric approach ensures that every solution is tailored to 
                  address your unique business challenges and opportunities.
                </p>
               
                <div className="about-summary-points">
                  <div className="about-point">
                    <div className="about-point-number">01</div>
                    <div className="about-point-content">
                      <h4>Expert Guidance</h4>
                      <p>Professional advice from experienced consultants</p>
                    </div>
                  </div>
                  <div className="about-point">
                    <div className="about-point-number">02</div>
                    <div className="about-point-content">
                      <h4>Innovative Solutions</h4>
                      <p>Cutting-edge approaches to business challenges</p>
                    </div>
                  </div>
                 
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
              <Link to="/contact" className="about-cta-button primary">Get Consultation</Link>
              <Link to="/services" className="about-cta-button secondary">Our Services</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}