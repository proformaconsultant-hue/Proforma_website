import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import accounting from '../../src/images/accounting-practice.jpg';
import { Home, ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook, ChevronRight, FileText, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "../InsightDetail.css";
import financialPlanning from '../../src/images/finance-planning.jpg';
import business from '../../src/images/business-growth.jpg';

export const AccountingPractice = () => {
  const relatedInsights = [
    {
      id: 1,
      title: "Financial Planning 2024",
      excerpt: "Essential financial planning strategies for the upcoming fiscal year and beyond.",
      image: financialPlanning,
      link: "/insights/financial-planning"
    },
    {
      id: 2,
      title: "Business Growth Strategies",
      excerpt: "Proven strategies for sustainable business expansion and market dominance.",
      image: business,
      link: "/insights/business-growth-strategies"
    }
  ];

  const keyPoints = [
    "Maintain accurate and up-to-date financial records",
    "Implement robust internal controls to prevent fraud",
    "Ensure compliance with accounting standards and regulations",
    "Regular account reconciliation and audit procedures",
    "Utilize modern accounting software for efficiency",
    "Continuous professional development for accounting staff"
  ];

  return (
    <div className="accounting-practice-page">
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
          <h1 className="article-title">Accounting Best Practices</h1>
          <div className="article-meta">
            <div className="meta-item">
              <User size={16} />
              <span>By CA Binod Pokhrel</span>
            </div>
            <div className="meta-item">
              <Calendar size={16} />
              <span>December 28, 2023</span>
            </div>
            <div className="meta-item">
              <Clock size={16} />
              <span>7 min read</span>
            </div>
          </div>
        </div>

        <div className="article-content">
          <img
            src={accounting}
            alt="Accounting Best Practices"
            className="article-featured-image"
          />
          
          <p className="article-text">
            Effective accounting practices are essential for the financial health of any organization. 
            Key best practices include maintaining <strong>accurate and up-to-date records</strong>, implementing robust internal controls to prevent fraud, and ensuring compliance with relevant accounting standards and regulations.
          </p>

          <div className="quote-block">
            "Good accounting is not just about recording numbers—it's about telling the story of a business's financial health and guiding its strategic decisions."
            <span className="quote-author">— CA Binod Pokhrel</span>
          </div>

          <p className="article-text">
            Regularly <strong>reconciling accounts</strong> and conducting audits can help identify discrepancies early. 
            This proactive approach allows for timely corrections and prevents minor issues from escalating into significant problems. 
            Modern accounting software can streamline these processes and improve accuracy through automation and integration.
          </p>

          <p className="article-text">
            <strong>Internal controls</strong> are crucial for safeguarding assets and ensuring the reliability of financial reporting. 
            These include segregation of duties, authorization procedures, and physical security measures. 
            Regular reviews and updates of these controls help adapt to changing business environments and emerging risks.
          </p>

          {/* Key Points Section */}
          <div className="key-points">
            <h3 className="key-points-title">
              <FileText size={24} />
              Essential Accounting Practices
            </h3>
            <ul className="key-points-list">
              {keyPoints.map((point, index) => (
                <li key={index} className="key-point">
                  <div className="key-point-icon">
                    <CheckCircle size={20} />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="article-text">
            Technology plays a pivotal role in modern accounting. 
            Cloud-based accounting solutions offer real-time access to financial data, enhanced collaboration, and improved scalability. 
            Integration with other business systems ensures data consistency and reduces manual data entry errors.
          </p>

          <p className="article-text">
            Additionally, ongoing training for accounting staff on the latest industry developments is crucial. 
            Professional development ensures that accounting teams stay current with changing regulations, technologies, and best practices. 
            By adhering to these best practices, organizations can enhance their financial reporting and decision-making capabilities.
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
          <h2 className="cta-main-title">Optimize Your Financial Operations</h2>
          <p className="cta-main-subtitle">
            Our accounting experts can help you implement best practices, ensure compliance, and leverage technology for financial excellence and business growth.
          </p>
          <Link to="/contact" className="cta-button">
            Improve Accounting Systems
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}