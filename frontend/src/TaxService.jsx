import React from 'react';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sparkles, Calculator, Shield, Globe, FileCheck, TrendingUp, ArrowRight } from "lucide-react";
import taxImage from "./images/tax-service.jpg";
import { Link } from "react-router-dom";
export const TaxService = () => {
  const features = [
    {
      icon: <Calculator size={24} />,
      title: "Tax Planning",
      description: "Strategic tax planning to optimize your tax position and maximize savings"
    },
    {
      icon: <Shield size={24} />,
      title: "Compliance Management",
      description: "Ensure full compliance with local, state, and federal tax regulations"
    },
    {
      icon: <Globe size={24} />,
      title: "International Taxation",
      description: "Expert guidance for businesses operating across international borders"
    },
    {
      icon: <FileCheck size={24} />,
      title: "Audit Support",
      description: "Comprehensive support during tax audits and regulatory examinations"
    }
  ];

  return (
    <div className="tax-service-page">
      <Header />

      {/* Hero Section */}
      <div className="tax-service-hero-section">
        <div className="hero-content">
          <h1 className="tax-service-hero-title">

            Tax Services
          </h1>
          <p className="tax-service-hero-subtitle">
            Expert tax planning and compliance solutions for businesses and individuals
          </p>
        </div>
      </div>

      <div className="container">
        {/* Content Section */}
        <div className="tax-service-content-section">
          <h2 className="tax-service-content-title">Our Tax Services</h2>

          <div className="services-container">
            <div className="services-left">
              <ul className="tax-services-list">
                <li>Tax Planning and Strategy Development</li>
                <li>Corporate and Business Tax Compliance</li>
                <li>Personal Income Tax Preparation</li>
                <li>VAT and GST Registration and Filing</li>
                <li>Tax Audit Support and Representation</li>
                <li>International Tax Planning and Compliance</li>
                <li>Tax Residency and Treaty Analysis</li>
                <li>Tax Dispute Resolution Services</li>
              </ul>
            </div>
            <div className="services-right">
              <div className="tax-services-image">
                <img src={taxImage} alt="Tax Services" />
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
            <p className="tax-service-content-text">
              At Proforma Insights, we provide comprehensive tax services designed to help businesses and individuals
              navigate the complexities of tax regulations. Our team of tax experts is committed to delivering
              personalized solutions that optimize your tax position while ensuring full compliance with all applicable laws.
              We stay updated with the latest tax developments to provide you with strategic advice that maximizes
              savings and minimizes liabilities.
            </p>
          </div>

          {/* CTA Section */}
          <div className="service-cta">
            <h3 className="cta-title">Optimize Your Tax Strategy Today</h3>
            <p className="cta-subtitle">
              Partner with our tax experts to develop a comprehensive tax strategy that protects your interests
              and maximizes your financial potential.
            </p>
            <Link to="/contact" className="cta-button">
              Get Tax Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}