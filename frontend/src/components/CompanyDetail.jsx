import React, { useState, useRef, useEffect } from 'react';
import { Crosshair, Star, Rocket, Target, Award, TrendingUp, Users, Zap } from 'lucide-react';

// Icon mapping for dynamic icon names
const iconMap = {
  'Crosshair': Crosshair,
  'Star': Star,
  'Rocket': Rocket,
  'Target': Target,
  'Award': Award,
  'TrendingUp': TrendingUp,
  'Users': Users,
  'Zap': Zap
};

export const CompanyDetail = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [companyCards, setCompanyCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Fetch Proforma cards from API
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/proforma-cards/');
        const data = await response.json();
        setCompanyCards(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Proforma cards:', error);
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  // Helper function to render content blocks
  const renderContentBlocks = (blocks) => {
    if (!blocks || blocks.length === 0) return null;

    return blocks.map((block, index) => {
      switch (block.type) {
        case 'heading':
          return <h4 key={index} className="overlay-heading">{block.content}</h4>;
        case 'paragraph':
          return <p key={index} className="overlay-paragraph">{block.content}</p>;
        case 'list':
          return (
            <ul key={index} className="overlay-list">
              {block.content.map((item, i) => (
                <li key={i} className="overlay-list-item">{item}</li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  if (loading) {
    return (
      <section className="company-detail-container" ref={sectionRef}>
        <div className="company-detail-header">
          <h2 className="company-detail-title">More About Proforma</h2>
          <p className="company-detail-subtitle">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className={`company-detail-container ${isInView ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="company-detail-header">
        <h2 className="company-detail-title">More About Proforma</h2>
        <p className="company-detail-subtitle">Proforma Helps You To Upgrade Your Business</p>
        <div className="company-detail-underline"></div>
      </div>

      <div className="company-cards-grid">
        {companyCards.map((card) => {
          const IconComponent = iconMap[card.icon_name] || Star;
          return (
            <div
              key={card.id}
              className="company-detail-card"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="detail-card-image-container">
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="detail-card-image"
                  />
                ) : (
                  <div className="detail-card-placeholder">
                    <IconComponent size={80} color="#007bff" strokeWidth={1} />
                  </div>
                )}

                {/* Overlay Content */}
                <div className={`detail-card-overlay ${hoveredCard === card.id ? 'active' : ''}`}>
                  <div className="overlay-content">
                    <div className="overlay-icon-wrapper">
                      <IconComponent size={48} color="#ffc107" strokeWidth={1.5} />
                    </div>
                    <h3 className="overlay-title">{card.title}</h3>
                    {renderContentBlocks(card.content_blocks)}
                  </div>
                </div>
              </div>

              {/* Card Title (visible when not hovering) */}
              <div className={`detail-card-title-section ${hoveredCard === card.id ? 'hidden' : ''}`}>
                <div className="detail-card-icon-wrapper">
                  <IconComponent size={40} color="#007bff" strokeWidth={1.5} />
                </div>
                <h3 className="detail-card-title">{card.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};