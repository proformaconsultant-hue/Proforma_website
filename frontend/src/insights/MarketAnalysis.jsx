import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import market from '../../src/images/market-analysis1.jpg';
import { Home, ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook, ChevronRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import "../InsightDetail.css";
import business from '../../src/images/business-growth.jpg';
import tech from '../../src/images/techtrends.jpg';

export const MarketAnalysis = () => {
  const relatedInsights = [
    {
      id: 1,
      title: "Business Growth Strategies",
      excerpt: "Proven strategies for sustainable business expansion and market dominance.",
      image: business,
      link: "/insights/business-growth-strategies"
    },
    {
      id: 2,
      title: "Tech Trends to Watch",
      excerpt: "Latest technological innovations shaping the future of business operations.",
      image: tech,
      link: "/insights/tech-trends-to-watch"
    }
  ];

  const keyPoints = [
    "Technological advancements driving market shifts",
    "Changing consumer behaviors and preferences",
    "Growth in technology, healthcare, and renewable energy sectors",
    "Digital transformation as a competitive advantage",
    "Sustainability as a key business differentiator",
    "Emerging markets offering new opportunities"
  ];

  return (
    <div className="market-analysis-page">
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
          <h1 className="article-title">Market Analysis 2024</h1>
          <div className="article-meta">
            <div className="meta-item">
              <User size={16} />
              <span>By CA Janak Pokhrel</span>
            </div>
            <div className="meta-item">
              <Calendar size={16} />
              <span>January 15, 2024</span>
            </div>
            <div className="meta-item">
              <Clock size={16} />
              <span>8 min read</span>
            </div>
          </div>
        </div>

        <div className="article-content">
          <img
            src={market}
            alt="Market Analysis 2024"
            className="article-featured-image"
          />
          
          <p className="article-text">
            In 2024, the global market is expected to experience significant shifts driven by 
            <strong> technological advancements</strong>, changing consumer behaviors, and evolving economic conditions. 
            Key sectors such as <strong>technology, healthcare, and renewable energy</strong> are projected to see substantial growth. 
            Businesses that adapt to digital transformation and prioritize sustainability will likely outperform their competitors.
          </p>

          <div className="quote-block">
            "The ability to adapt to technological change and embrace sustainable practices will be the defining factor for business success in 2024."
            <span className="quote-author">— CA Janak Pokhrel</span>
          </div>

          <p className="article-text">
            Additionally, emerging markets present new opportunities for expansion and investment. 
            The rise of <strong>artificial intelligence and automation</strong> continues to transform traditional business models, 
            creating both challenges and opportunities across industries.
          </p>

          <p className="article-text">
            Staying informed about these trends is crucial for making strategic decisions in the coming year. 
            Companies that invest in <strong>data analytics and customer experience</strong> will be better positioned to navigate 
            market uncertainties and capitalize on emerging opportunities.
          </p>

          {/* Key Points Section */}
          <div className="key-points">
            <h3 className="key-points-title">
              <TrendingUp size={24} />
              Key Market Insights 2024
            </h3>
            <ul className="key-points-list">
              {keyPoints.map((point, index) => (
                <li key={index} className="key-point">
                  <div className="key-point-icon">
                    <ChevronRight size={20} />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="article-text">
            As we move further into 2024, <strong>agility and innovation</strong> will be more important than ever. 
            Businesses must remain flexible in their strategies while maintaining a clear vision for long-term growth. 
            Regular market analysis and strategic planning will be essential for navigating the complex business landscape ahead.
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
          <h2 className="cta-main-title">Stay Ahead of Market Trends</h2>
          <p className="cta-main-subtitle">
            Get personalized market analysis and strategic insights tailored to your business needs. 
            Our experts will help you navigate the complex market landscape of 2024.
          </p>
          <Link to="/contact" className="cta-button">
            Get Expert Consultation
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}