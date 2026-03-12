import { useRef, useEffect, useState } from 'react';
import { Target, Lightbulb, Zap } from 'lucide-react';

export const Introduction = () => {
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

  const insights = [
    {
      icon: Target,
      title: 'Strategic Consultancy',
      description: 'We specialize in delivering comprehensive IT solutions tailored to meet the unique needs of your business.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'Our team of experienced consultants works closely with clients to understand their challenges and develop strategies that drive growth.'
    },
    {
      icon: Zap,
      title: 'Expert Guidance',
      description: 'Whether IT infrastructure, digital transformation, or business optimization, we have the expertise to guide you every step.'
    }
  ];

  return (
    <section className={`introduction-section ${isInView ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="introduction-container">
        <div className="introduction-header">
          <h2 className="introduction-heading">Proforma Insights</h2>
          <p className="introduction-subtitle">Your Trusted Partner for Business Consultancy & IT Solutions</p>
          <div className="introduction-underline"></div>
        </div>

        <div className="introduction-cards-grid">
          {insights.map((insight, index) => {
            const IconComponent = insight.icon;
            return (
              <div key={index} className={`introduction-card ${isInView ? 'animate-in' : ''}`} style={{ '--card-delay': `${index * 0.2}s` }}>
                <div className="card-icon-wrapper">
                  <IconComponent size={48} color="#007bff" strokeWidth={1.5} />
                </div>
                <h3 className="card-title">{insight.title}</h3>
                <p className="card-description">{insight.description}</p>
              </div>
            );
          })}
        </div>

        <div className={`introduction-content ${isInView ? 'animate-in' : ''}`}>
          <p className="introduction-text">
            <span className="introduction-highlight">Proforma Insights</span> is committed to helping businesses thrive in today's competitive landscape by providing remote and physical business consultancy services with cutting-edge IT solutions integrated at every level.
          </p>
        </div>
      </div>
    </section>
  );
};