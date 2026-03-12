import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, CheckCircle } from 'lucide-react';
import facebookIcon from './images/facebook-new-icon.png';
import linkedinIcon from './images/linkedin-icon.png';
import api from './services/api';
import './InsightDetail.css';

export const InsightDetail = () => {
  const { slug } = useParams();
  const [insight, setInsight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to render formatted content
  const renderContent = (content) => {
    const blocks = content.split('\n\n');
    
    return blocks.map((block, index) => {
      // Check if it's a heading (starts with **)
      if (block.startsWith('**') && block.includes('**')) {
        const headingMatch = block.match(/^\*\*(.+?)\*\*/);
        if (headingMatch) {
          const headingText = headingMatch[1];
          const restOfBlock = block.substring(headingMatch[0].length).trim();
          
          return (
            <div key={index} className="content-section">
              <h3 className="content-heading">{headingText}</h3>
              {restOfBlock && <p className="content-paragraph">{formatInlineText(restOfBlock)}</p>}
            </div>
          );
        }
      }
      
      // Check if it's a list item (starts with - or number.)
      if (block.includes('\n-') || /^\d+\./.test(block)) {
        const lines = block.split('\n');
        const listItems = [];
        let currentText = '';
        
        lines.forEach(line => {
          if (line.trim().startsWith('-') || /^\d+\./.test(line.trim())) {
            if (currentText) {
              listItems.push(currentText);
            }
            currentText = line.replace(/^-\s*/, '').replace(/^\d+\.\s*/, '').trim();
          } else if (line.trim()) {
            currentText += ' ' + line.trim();
          }
        });
        
        if (currentText) {
          listItems.push(currentText);
        }
        
        if (listItems.length > 0) {
          return (
            <ul key={index} className="content-list">
              {listItems.map((item, i) => (
                <li key={i} className="content-list-item">
                  <CheckCircle size={18} className="list-icon" />
                  <span>{formatInlineText(item)}</span>
                </li>
              ))}
            </ul>
          );
        }
      }
      
      // Regular paragraph
      if (block.trim()) {
        return (
          <p key={index} className="content-paragraph">
            {formatInlineText(block)}
          </p>
        );
      }
      
      return null;
    }).filter(Boolean);
  };

  // Function to format inline text (bold, italic, etc.)
  const formatInlineText = (text) => {
    const parts = [];
    let currentIndex = 0;
    
    // Match **bold** text
    const boldRegex = /\*\*(.+?)\*\*/g;
    let match;
    
    while ((match = boldRegex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > currentIndex) {
        parts.push(text.substring(currentIndex, match.index));
      }
      
      // Add bold text
      parts.push(<strong key={match.index}>{match[1]}</strong>);
      currentIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (currentIndex < text.length) {
      parts.push(text.substring(currentIndex));
    }
    
    return parts.length > 0 ? parts : text;
  };

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        setLoading(true);
        const data = await api.getInsight(slug);
        if (data) {
          setInsight(data);
        } else {
          setError('Insight not found');
        }
      } catch (error) {
        console.error('Error fetching insight:', error);
        setError('Failed to load insight');
      } finally {
        setLoading(false);
      }
    };

    fetchInsight();
  }, [slug]);

  if (loading) {
    return (
      <div className="insight-detail-page">
        <Header />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading article...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !insight) {
    return (
      <div className="insight-detail-page">
        <Header />
        <div className="error-container">
          <h2>Article Not Found</h2>
          <p>{error || 'The article you are looking for does not exist.'}</p>
          <Link to="/insights" className="back-link">
            <ArrowLeft size={20} />
            Back to Insights
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(insight.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="insight-detail-page">
      <Header />

      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <div className="container">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/insights" className="breadcrumb-link">Insights</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{insight.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <article className="insight-article">
        <div className="container">
          <div className="article-header">
            <div className="article-category">
              <Tag size={16} />
              {insight.category}
            </div>
            <h1 className="article-title">{insight.title}</h1>
            
            <div className="article-meta">
              <div className="meta-item">
                <User size={18} />
                <span>{insight.author}</span>
              </div>
              <div className="meta-item">
                <Calendar size={18} />
                <span>{formattedDate}</span>
              </div>
              <div className="meta-item">
                <Clock size={18} />
                <span>{insight.read_time}</span>
              </div>
            </div>

            {insight.excerpt && (
              <p className="article-excerpt">{insight.excerpt}</p>
            )}
          </div>

          {/* Featured Image */}
          {insight.image && (
            <div className="article-image-container">
              <img 
                src={insight.image} 
                alt={insight.title}
                className="article-image"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="article-content">
            {/* Check if using new flexible content_blocks format */}
            {insight.content_blocks && insight.content_blocks.length > 0 ? (
              <div className="content-blocks">
                {insight.content_blocks.map((block, index) => {
                  if (block.type === 'paragraph') {
                    return (
                      <p key={index} className={index === 0 ? "intro-paragraph" : "content-paragraph"}>
                        {block.content}
                      </p>
                    );
                  } else if (block.type === 'heading') {
                    return (
                      <h3 key={index} className="section-heading">
                        {block.content}
                      </h3>
                    );
                  } else if (block.type === 'list' && Array.isArray(block.content)) {
                    return (
                      <ul key={index} className="section-points">
                        {block.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="point-item">
                            <CheckCircle size={18} className="point-icon" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </div>
            ) : insight.introduction || (insight.content_sections && insight.content_sections.length > 0) ? (
              /* Legacy structured format */
              <>
                {insight.introduction && (
                  <div className="content-introduction">
                    <p className="intro-paragraph">{insight.introduction}</p>
                  </div>
                )}

                {insight.content_sections && insight.content_sections.length > 0 && (
                  <div className="content-sections">
                    {insight.content_sections.map((section, index) => (
                      <div key={index} className="content-section">
                        <h3 className="section-heading">{section.heading}</h3>
                        {section.content && (
                          <p className="section-description">{section.content}</p>
                        )}
                        {section.points && section.points.length > 0 && (
                          <ul className="section-points">
                            {section.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="point-item">
                                <CheckCircle size={18} className="point-icon" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {insight.conclusion && (
                  <div className="content-conclusion">
                    <h3 className="conclusion-heading">Conclusion</h3>
                    <p className="conclusion-paragraph">{insight.conclusion}</p>
                  </div>
                )}
              </>
            ) : (
              /* Fallback to legacy content */
              <div className="content-body">
                {renderContent(insight.content || '')}
              </div>
            )}

            {/* Share Section */}
            <div className="article-share">
              <div className="share-header">
                <Share2 size={20} />
                <span>Share this article</span>
              </div>
              <div className="share-buttons">
                <button 
                  className="share-btn facebook"
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                >
                  <img src={facebookIcon} alt="Facebook" style={{ width: '18px', height: '18px', marginRight: '6px' }} />
                  Facebook
                </button>
                <button 
                  className="share-btn twitter"
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${insight.title}`, '_blank')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter
                </button>
                <button 
                  className="share-btn linkedin"
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')}
                >
                  <img src={linkedinIcon} alt="LinkedIn" style={{ width: '18px', height: '18px', marginRight: '6px' }} />
                  LinkedIn
                </button>
              </div>
            </div>
          </div>

          {/* Back to Insights */}
          <div className="article-footer">
            <Link to="/insights" className="back-to-insights">
              <ArrowLeft size={20} />
              Back to All Insights
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};
