import React from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import digital from '../../src/images/digital-transform.avif';
import { Home, ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook, ChevronRight, Cpu, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import "../InsightDetail.css";

export const DigitalTransform = () => {
  const relatedInsights = [
    {
      id: 1,
      title: "Tech Trends to Watch",
      excerpt: "Latest technological innovations shaping the future of business operations.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
      link: "/insights/tech-trends-to-watch"
    },
    {
      id: 2,
      title: "Business Growth Strategies",
      excerpt: "Proven strategies for sustainable business expansion and market dominance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "/insights/business-growth-strategies"
    }
  ];

  const keyPoints = [
    "Assess current digital maturity and capabilities",
    "Define clear digital transformation objectives",
    "Develop phased implementation roadmap",
    "Invest in necessary technology infrastructure",
    "Train and upskill workforce for digital tools",
    "Establish metrics to measure transformation success"
  ];

  return (
    <div className="digital-transform-page">
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
          <h1 className="article-title">Digital Transformation Roadmap</h1>
          <div className="article-meta">
            <div className="meta-item">
              <User size={16} />
              <span>By Samit Paudel</span>
            </div>
            <div className="meta-item">
              <Calendar size={16} />
              <span>December 20, 2023</span>
            </div>
            <div className="meta-item">
              <Clock size={16} />
              <span>9 min read</span>
            </div>
          </div>
        </div>

        <div className="article-content">
          <img
            src={digital}
            alt="Digital Transformation Roadmap"
            className="article-featured-image"
          />
          
          <p className="article-text">
            Digital transformation is no longer optional for businesses seeking to remain competitive in today's rapidly evolving marketplace. 
            It involves fundamentally changing how organizations operate and deliver value to customers through the integration of digital technologies.
          </p>

          <div className="quote-block">
            "Digital transformation is not just about technology—it's about reimagining business processes and creating new value for customers in the digital age."
            <span className="quote-author">— Samit Paudel</span>
          </div>

          <p className="article-text">
            The journey begins with a comprehensive assessment of current digital maturity. 
            Organizations must evaluate their existing technology infrastructure, digital capabilities, and workforce readiness. 
            This assessment forms the foundation for developing a <strong>strategic roadmap</strong> aligned with business objectives.
          </p>

          <p className="article-text">
            Key areas of focus include <strong>cloud adoption</strong>, data analytics implementation, automation of routine tasks, and enhancement of customer digital experiences. 
            Each organization's transformation path will vary based on industry, size, and specific business needs, but common principles apply across sectors.
          </p>

          {/* Key Points Section */}
          <div className="key-points">
            <h3 className="key-points-title">
              <Cloud size={24} />
              Transformation Framework
            </h3>
            <ul className="key-points-list">
              {keyPoints.map((point, index) => (
                <li key={index} className="key-point">
                  <div className="key-point-icon">
                    <Cpu size={20} />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="article-text">
            Successful implementation requires <strong>change management</strong> and continuous learning. 
            Employees need support and training to adapt to new technologies and processes. 
            Leadership commitment and clear communication throughout the organization are essential for overcoming resistance and ensuring adoption.
          </p>

          <p className="article-text">
            Measuring success involves tracking key performance indicators related to efficiency gains, cost reductions, revenue growth, and customer satisfaction. 
            Regular review and adjustment of the transformation strategy ensure alignment with evolving business needs and technological advancements.
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
          <h2 className="cta-main-title">Begin Your Digital Transformation Journey</h2>
          <p className="cta-main-subtitle">
            Our digital experts can guide you through every step of your transformation, from strategy development to implementation and optimization.
          </p>
          <Link to="/contact" className="cta-button">
            Start Digital Journey
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}