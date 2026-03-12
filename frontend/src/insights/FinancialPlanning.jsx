import React from 'react';
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import financialPlanning from '../images/finance-planning.jpg';
import { Home, ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook, ChevronRight, DollarSign, PieChart } from "lucide-react";
import { Link } from "react-router-dom";
import "../InsightDetail.css";

export const FinancialPlanning = () => {
  const relatedInsights = [
    {
      id: 1,
      title: "Accounting Best Practices",
      excerpt: "Modern accounting practices and compliance standards for financial excellence.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      link: "/insights/accounting-best-practices"
    },
    {
      id: 2,
      title: "Market Analysis 2024",
      excerpt: "Comprehensive analysis of emerging market trends and strategic opportunities.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      link: "/insights/market-analysis-2024"
    }
  ];

  const keyPoints = [
    "Set clear and achievable financial objectives",
    "Assess current financial status comprehensively",
    "Develop strategies to bridge financial gaps",
    "Implement budgeting and savings discipline",
    "Diversify investment portfolio appropriately",
    "Regularly review and adjust financial plans"
  ];

  return (
    <div className="financial-planning-page">
      <Header />
      
      {/* Navigation Controls */}
      <div className="navigation-controls">
        <div className="nav-buttons">
          <Link className="nav-button" to="/insights">
            <ArrowLeft size={18} />
            Back to Insights
          </Link>
          <Link to="/" className="nav-button">
            <Home size={18} />
            Home
          </Link>
        </div>
        
        <div className="share-buttons">
          <span className="share-label">Share:</span>
          <a href="#" className="share-icon" aria-label="Share on Twitter">
            <Twitter size={18} />
          </a>
          <a href="#" className="share-icon" aria-label="Share on LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="#" className="share-icon" aria-label="Share on Facebook">
            <Facebook size={18} />
          </a>
        </div>
      </div>

      {/* Article Content */}
      <div className="article-container">
        <div className="article-header">
          <h1 className="article-title">Effective Financial Planning</h1>
          <div className="article-meta">
            <div className="meta-item">
              <User size={16} />
              <span>By CA Soonam Chaudary</span>
            </div>
            <div className="meta-item">
              <Calendar size={16} />
              <span>December 15, 2023</span>
            </div>
            <div className="meta-item">
              <Clock size={16} />
              <span>8 min read</span>
            </div>
          </div>
        </div>

        <div className="article-content">
          <img
            src={financialPlanning}
            alt="Effective Financial Planning"
            className="article-featured-image"
          />
          
          <p className="article-text">
            Effective financial planning is crucial for both individuals and businesses to achieve their long-term goals. 
            Key components of a solid financial plan include <strong>budgeting, saving, investing, and risk management</strong>. 
            It is important to set clear financial objectives, assess current financial status, and develop strategies to bridge the gap between the two.
          </p>

          <div className="quote-block">
            "Financial planning is not about predicting the future, but about being prepared for whatever it may bring while working toward your goals."
            <span className="quote-author">— CA Binod Pokhrel</span>
          </div>

          <p className="article-text">
            The planning process begins with <strong>goal setting</strong>, which should be specific, measurable, achievable, relevant, and time-bound (SMART). 
            Common financial goals include retirement planning, education funding, debt reduction, and wealth accumulation. 
            Each goal requires different strategies and timelines for achievement.
          </p>

          <p className="article-text">
            <strong>Risk assessment</strong> is another critical component, involving identification of potential financial risks and development of mitigation strategies. 
            This includes insurance planning, emergency fund establishment, and investment diversification. 
            Regular review and adjustment of the plan ensures it remains aligned with changing circumstances and goals.
          </p>

          {/* Key Points Section */}
          <div className="key-points">
            <h3 className="key-points-title">
              <PieChart size={24} />
              Financial Planning Essentials
            </h3>
            <ul className="key-points-list">
              {keyPoints.map((point, index) => (
                <li key={index} className="key-point">
                  <div className="key-point-icon">
                    <DollarSign size={20} />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="article-text">
            Investment planning requires understanding different asset classes, risk tolerance, and time horizons. 
            A well-diversified portfolio typically includes a mix of stocks, bonds, real estate, and alternative investments. 
            Regular rebalancing ensures the portfolio maintains its target asset allocation.
          </p>

          <p className="article-text">
            Additionally, seeking professional advice can provide valuable insights and help optimize financial outcomes. 
            Financial planners bring expertise in tax optimization, estate planning, and investment strategies. 
            By implementing a comprehensive financial plan, individuals and businesses can enhance their financial stability and growth prospects.
          </p>
        </div>
      </div>

      {/* Related Insights */}
      <div className="article-container">
        <div className="related-insights">
          <h2 className="section-title">Related Insights</h2>
          <div className="related-grid">
            {relatedInsights.map((insight) => (
              <Link key={insight.id} to={insight.link} className="related-card">
                <img src={insight.image} alt={insight.title} className="related-image" />
                <div className="related-content">
                  <h3 className="related-title">{insight.title}</h3>
                  <p className="related-excerpt">{insight.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="insight-cta">
        <div className="cta-content">
          <h2 className="cta-main-title">Secure Your Financial Future</h2>
          <p className="cta-main-subtitle">
            Our financial planning experts can help you create a comprehensive strategy to achieve your financial goals and build lasting wealth.
          </p>
          <Link to="/contact" className="cta-button">
            Plan Your Financial Future
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}