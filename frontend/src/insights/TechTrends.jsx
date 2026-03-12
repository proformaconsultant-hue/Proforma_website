import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import tech from '../../src/images/techtrends.jpg';
import { Home, ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook, ChevronRight, Cpu, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import "../InsightDetail.css";
import digital from '../../src/images/digital-transform.avif';
import market from '../../src/images/market-analysis1.jpg';

export const TechTrends = () => {
  const relatedInsights = [
    {
      id: 1,
      title: "Digital Transformation Roadmap",
      excerpt: "Step-by-step guide to implementing successful digital transformation in your organization.",
      image: digital,
      link: "/insights/digital-transformation"
    },
    {
      id: 2,
      title: "Market Analysis 2024",
      excerpt: "Comprehensive analysis of emerging market trends and strategic opportunities.",
      image: market,
      link: "/insights/market-analysis-2024"
    }
  ];

  const keyPoints = [
    "Artificial Intelligence and Machine Learning advancements",
    "5G connectivity revolutionizing communication",
    "Edge computing enabling real-time processing",
    "Internet of Things expanding interconnected devices",
    "Blockchain technology enhancing security",
    "Quantum computing emerging as next frontier"
  ];

  return (
    <div className="tech-trends-page">
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
          <h1 className="article-title">Tech Trends to Watch</h1>
          <div className="article-meta">
            <div className="meta-item">
              <User size={16} />
              <span>By Suraj Pandey</span>
            </div>
            <div className="meta-item">
              <Calendar size={16} />
              <span>January 10, 2024</span>
            </div>
            <div className="meta-item">
              <Clock size={16} />
              <span>6 min read</span>
            </div>
          </div>
        </div>

        <div className="article-content">
          <img
            src={tech}
            alt="Tech Trends to Watch"
            className="article-featured-image"
          />
          
          <p className="article-text">
            In today's rapidly evolving technological landscape, staying ahead of the curve is essential for businesses and individuals alike. 
            The year 2024 promises to bring forth a plethora of innovative tech trends that are set to reshape industries and redefine how we interact with technology.
          </p>

          <div className="quote-block">
            "Technology is no longer just a support function—it's becoming the core of business strategy and competitive advantage."
            <span className="quote-author">— Suraj Pandey</span>
          </div>

          <p className="article-text">
            One of the most notable trends to watch is the continued growth of <strong>AI-powered solutions</strong>. 
            Businesses are increasingly leveraging AI to enhance customer experiences, streamline operations, and gain valuable insights from data. 
            Additionally, the rise of <strong>edge computing</strong> is enabling faster processing and reduced latency, making it possible to deploy applications in real-time scenarios.
          </p>

          <p className="article-text">
            Another key trend is the expansion of the <strong>Internet of Things (IoT)</strong>, with more devices becoming interconnected than ever before. 
            This connectivity is driving innovation in smart homes, healthcare, and industrial applications. 
            Furthermore, the adoption of <strong>blockchain technology</strong> is gaining momentum, offering enhanced security and transparency in various transactions.
          </p>

          {/* Key Points Section */}
          <div className="key-points">
            <h3 className="key-points-title">
              <Cpu size={24} />
              Emerging Technology Trends
            </h3>
            <ul className="key-points-list">
              {keyPoints.map((point, index) => (
                <li key={index} className="key-point">
                  <div className="key-point-icon">
                    <Zap size={20} />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="article-text">
            The proliferation of <strong>5G networks</strong> is another critical development, enabling faster data transfer speeds and supporting the growth of IoT devices. 
            This technology will revolutionize how we interact with digital services and open new possibilities for remote work and collaboration.
          </p>

          <p className="article-text">
            As we look ahead to 2024, it is clear that these tech trends will play a pivotal role in shaping the future. 
            Embracing these advancements will be crucial for businesses seeking to remain competitive and for individuals aiming to stay informed in an ever-changing digital world.
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
          <h2 className="cta-main-title">Transform Your Business with Technology</h2>
          <p className="cta-main-subtitle">
            Leverage cutting-edge technology solutions to drive innovation and growth in your organization. 
            Our IT experts can help you implement the right technologies for your business needs.
          </p>
          <Link to="/contact" className="cta-button">
            Explore IT Solutions
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}