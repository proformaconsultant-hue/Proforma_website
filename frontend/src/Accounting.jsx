import React from 'react';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Sparkles, BookOpen, PieChart, DollarSign, FileText, Users, ArrowRight } from 'lucide-react';
import image1 from './images/accounting-1.jpg';
import { Link } from 'react-router-dom';
export const Accounting = () => {
  const features = [
    {
      icon: <BookOpen size={24} />,
      title: "Bookkeeping",
      description: "Accurate and timely recording of financial transactions"
    },
    {
      icon: <PieChart size={24} />,
      title: "Financial Analysis",
      description: "Detailed analysis of financial performance and trends"
    },
    {
      icon: <DollarSign size={24} />,
      title: "Payroll Management",
      description: "Comprehensive payroll processing and compliance"
    },
    {
      icon: <FileText size={24} />,
      title: "Financial Reporting",
      description: "Preparation of financial statements and management reports"
    }
  ];

  return (
    <div className="accounting-page">
      <Header />
      
      {/* Hero Section */}
      <div className="accounting-hero-section">
        <div className="hero-content">
          <h1 className="accounting-hero-title">
         
            Accounting Services
          </h1>
          <p className="accounting-hero-subtitle">
            Comprehensive accounting solutions for accurate financial management and business success
          </p>
        </div>
      </div>

      <div className="container">
        {/* Content Section */}
        <div className="accounting-content-section">
          <h2 className="accounting-content-title">Our Accounting Services</h2>
          
          <div className="services-container">
            <div className="services-left">
              <ul className="accounting-services-list">
                <li>Bookkeeping and Financial Record Management</li>
                <li>Financial Statement Preparation and Analysis</li>
                <li>Payroll Processing and Compliance Management</li>
                <li>Tax Preparation and Strategic Planning</li>
                <li>Budget Development and Financial Forecasting</li>
                <li>Audit Preparation and Support Services</li>
                <li>Management Accounting and Cost Analysis</li>
                <li>Financial Process Optimization</li>
              </ul>
            </div>
            <div className="services-right">
              <div className="accounting-services-image">
                <img src={image1} alt="Accounting Services" />
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
            <p className="accounting-content-text">
              At Proforma Insights, we understand that accurate and timely accounting is fundamental to 
              business success. Our team of experienced accountants is dedicated to providing comprehensive 
              accounting services tailored to meet the unique needs of your organization. Whether you're a 
              small startup or an established corporation, we offer the expertise and tools necessary to 
              manage your finances effectively, ensure compliance, and make informed strategic decisions 
              that drive growth and profitability.
            </p>
          </div>

          {/* CTA Section */}
          <div className="service-cta">
            <h3 className="cta-title">Streamline Your Financial Operations</h3>
            <p className="cta-subtitle">
              Partner with our accounting experts to establish efficient financial systems that provide 
              clarity, control, and confidence in your business decisions.
            </p>
            <Link to="/contact" className="cta-button">
              Get Accounting Support
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}