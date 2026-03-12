import { useRef, useEffect, useState } from 'react';
import heroImage from '../images/proforma-office.jpg';
import { api } from '../services/api';

export const HeroSection = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await api.getHomepage();
        setContent(data);
      } catch (error) {
        console.error('Error fetching homepage content:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, []);

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

  if (loading || !content) {
    return <div>Loading...</div>;
  }

  // Use backend image if available, otherwise fallback to default
  const displayImage = content.hero_image || heroImage;

  return (
    <section className={`hero-section ${isInView ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="hero-container">
        <div className="hero-image">
          <img src={displayImage} alt="Proforma Hero" />
        </div>

        <div className="hero-content">
          <h2 className="hero-title">
            {content.hero_title.split('IT Services')[0]}
            <span className="hero-highlight-1">IT Services</span>
          </h2>
          <p className="hero-subtitle">{content.hero_subtitle}</p>
          <div className="hero-features">
            {content.hero_features?.map((feature, index) => (
              <div key={index} className="hero-feature-item">
                <div className="feature-icon">✓</div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};