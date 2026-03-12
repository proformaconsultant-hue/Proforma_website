import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import business from '../../src/images/business-growth.jpg';
import { Home, ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook, ChevronRight, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";
import market from '../../src/images/market-analysis1.jpg';
import accounting from '../../src/images/accounting-practice.jpg';
import "../InsightDetail.css";

export const BusinessGrowth = () => {
  const relatedInsights = [
    {
      id: 1,
      title: "Market Analysis 2024",
      excerpt: "Comprehensive analysis of emerging market trends and strategic opportunities.",
      image: market,
      link: "/insights/market-analysis-2024"
    },
    {
      id: 2,
      title: "Accounting Best Practices",
      excerpt: "Modern accounting practices and compliance standards for financial excellence.",
      image: accounting,
      link: "/insights/accounting-best-practices"
    }
  ];

  const keyPoints = [
    "Diversify product lines for market resilience",
    "Expand into new geographical markets",
    "Leverage technology for operational efficiency",
    "Build strong customer relationships",
    "Invest in employee development",
    "Foster culture of innovation and agility"
  ];

  return (
    <div className="business-growth-page">
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
          <h1 className="article-title">Business Growth Strategies</h1>
          <div className="article-meta">
            <div className="meta-item">
              <User size={16} />
              <span>By CA Binod Pokhrel</span>
            </div>
            <div className="meta-item">
              <Calendar size={16} />
              <span>January 5, 2024</span>
            </div>
            <div className="meta-item">
              <Clock size={16} />
              <span>10 min read</span>
            </div>
          </div>
        </div>

        <div className="article-content">
          <img
            src={business}
            alt="Business Growth Strategies"
            className="article-featured-image"
          />
          
          <p className="article-text">
            In today's competitive market, businesses must adopt effective growth strategies to stay ahead. 
            Key approaches include <strong>diversifying product lines</strong>, expanding into new markets, and leveraging technology to improve operational efficiency. 
            Building strong customer relationships through personalized marketing and exceptional service is also crucial.
          </p>

          <div className="quote-block">
            "Sustainable growth comes from creating value for customers while building a resilient organization that can adapt to change."
            <span className="quote-author">— CA Binod Pokhrel</span>
          </div>

          <p className="article-text">
            Additionally, investing in <strong>employee development</strong> and fostering a culture of innovation can drive long-term success. 
            Companies that prioritize their workforce and encourage creative problem-solving are better positioned to navigate challenges and seize opportunities.
          </p>

          <p className="article-text">
            Market penetration remains a fundamental strategy, focusing on increasing sales of existing products in current markets. 
            This can be achieved through <strong>competitive pricing</strong>, enhanced marketing efforts, and improved distribution channels. 
            Simultaneously, product development involves introducing new products to existing markets, requiring significant R&D investment and market research.
          </p>

          {/* Key Points Section */}
          <div className="key-points">
            <h3 className="key-points-title">
              <Target size={24} />
              Growth Strategy Essentials
            </h3>
            <ul className="key-points-list">
              {keyPoints.map((point, index) => (
                <li key={index} className="key-point">
                  <div className="key-point-icon">
                    <TrendingUp size={20} />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="article-text">
            Digital transformation plays a critical role in modern growth strategies. 
            Implementing <strong>data analytics tools</strong>, automating processes, and enhancing online presence can significantly boost efficiency and customer engagement. 
            Furthermore, strategic partnerships and alliances can provide access to new technologies, markets, and expertise.
          </p>

          <p className="article-text">
            By implementing these strategies with careful planning and execution, businesses can achieve sustainable growth and enhance their market position. 
            Regular performance monitoring and strategy adjustment ensure alignment with evolving market conditions and organizational goals.
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
          <h2 className="cta-main-title">Accelerate Your Business Growth</h2>
          <p className="cta-main-subtitle">
            Partner with our business consultants to develop and implement customized growth strategies that drive sustainable success and market leadership.
          </p>
          <Link to="/contact" className="cta-button">
            Start Growth Journey
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}