import { useState, useEffect, useRef } from 'react';
import { Calculator, Monitor, FileText, TrendingUp, Cloud, Shield, Pen, Layers } from 'lucide-react';
import { api } from '../services/api';

// Icon mapping
const iconMap = {
  Calculator, Monitor, FileText, TrendingUp, Cloud, Shield, Pen, Layers
};

export const OurServices = () => {
  const [services, setServices] = useState([]);
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

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await api.getHomePageServices();
        setServices(data);
      } catch (error) {
        console.error('Error fetching homepage services:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) {
    return (
      <section style={styles.section} ref={sectionRef}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h2 style={styles.title}>Our Services</h2>
            <p style={styles.subtitle}>Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{...styles.section, ...(isInView ? styles.sectionAnimated : {})}} className="services-section" ref={sectionRef}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Our Services</h2>
          <p style={styles.subtitle}>Comprehensive solutions tailored to your business needs</p>
          <div style={styles.underline}></div>
        </div>

        <div style={styles.grid} className="services-grid">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon_name] || Monitor;
            return (
              <div 
                key={service.id} 
                style={{
                  ...styles.card,
                  animationDelay: `${index * 0.1}s`
                }}
                className="service-card"
              >
                <div style={styles.imageWrapper} className="service-image-wrapper">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    style={styles.image}
                    className="service-image"
                  />
                </div>
                <div style={styles.cardContent}>
                  <div style={styles.iconWrapper}>
                    <IconComponent size={32} color="#007bff" strokeWidth={1.5} />
                  </div>
                  <h3 style={styles.cardTitle}>{service.title}</h3>
                  <p style={styles.cardSubtitle}>{service.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInCard {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 123, 255, 0.25) !important;
        }
        
        .service-card:hover .service-image {
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .services-section {
            padding: 60px 30px !important;
          }
          
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 30px !important;
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 50px 25px !important;
          }
          
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
          
          .service-card {
            max-width: 500px !important;
            margin: 0 auto !important;
          }
        }

        @media (max-width: 480px) {
          .services-section {
            padding: 40px 20px !important;
          }
          
          .service-image-wrapper {
            height: 180px !important;
            padding: 15px !important;
          }
          
          .service-card-content {
            padding: 20px !important;
          }
          
          .service-title {
            font-size: 20px !important;
          }
          
          .service-subtitle {
            font-size: 13px !important;
          }
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 40px',
    background: '#fff',
    position: 'relative',
  },
  sectionAnimated: {
    animation: 'fadeInUp 0.8s ease-out',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  title: {
    fontSize: 'clamp(32px, 6vw, 48px)',
    fontWeight: '900',
    color: '#1a1a1a',
    margin: '0 0 12px 0',
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: 'clamp(14px, 2.5vw, 20px)',
    color: '#666',
    margin: '0 0 20px 0',
    fontWeight: '500',
    
  },
  underline: {
    width: '150px',
    height: '6px',
    background: 'linear-gradient(90deg, #007bff 0%, #0056b3 40%, transparent 100%)',
    margin: '0 auto',
    borderRadius: '3px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    animation: 'slideInCard 0.8s ease-out backwards',
  },
  imageWrapper: {
    width: '100%',
    height: '220px',
    padding: '20px',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '12px',
    transition: 'transform 0.5s ease',
  },
  cardContent: {
    padding: '25px',
    textAlign: 'justify',
  },
  iconWrapper: {
    width: '60px',
    height: '60px',
    margin: '0 auto 15px',
    background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.1) 0%, rgba(0, 86, 179, 0.1) 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: '0 0 10px 0',
    lineHeight: '1.3',
    className: 'service-title',
  },
  cardSubtitle: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.6',
    margin: 0,
    className: 'service-subtitle',
  },
};
