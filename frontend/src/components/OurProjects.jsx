import { useState, useEffect, useRef } from 'react';
import { api } from '../services/api';

export const OurProjects = () => {
  const [projects, setProjects] = useState([]);
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
    const fetchProjects = async () => {
      try {
        const data = await api.getFeaturedProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section style={styles.section} ref={sectionRef}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h2 style={styles.title}>Our Projects</h2>
            <p style={styles.subtitle}>Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{...styles.section, ...(isInView ? styles.sectionAnimated : {})}} className="projects-section" ref={sectionRef}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Our Projects</h2>
          <p style={styles.subtitle}>Showcasing our successful projects and client solutions</p>
          <div style={styles.underline}></div>
        </div>

        <div style={styles.grid} className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.project_url || '#'}
              target={project.project_url ? '_blank' : '_self'}
              rel={project.project_url ? 'noopener noreferrer' : ''}
              style={{
                ...styles.card,
                animationDelay: `${index * 0.1}s`,
                textDecoration: 'none',
                color: 'inherit',
                cursor: project.project_url ? 'pointer' : 'default',
              }}
              className="project-card"
              onClick={(e) => {
                if (!project.project_url) {
                  e.preventDefault();
                }
              }}
            >
              <div style={styles.imageContainer} className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={styles.image}
                />
                <div style={styles.overlay} className="project-overlay">
                  <div style={styles.overlayContent}>
                    {project.category && (
                      <span style={styles.category} className="project-category">{project.category}</span>
                    )}
                    {project.project_url && (
                      <div style={styles.viewProject}>
                        <span style={styles.viewProjectText} className="view-project-text">View Project →</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div style={styles.cardContent} className="project-card-content">
                <h3 style={styles.cardTitle} className="project-title">{project.title}</h3>
                {project.description && (
                  <p style={styles.cardDescription} className="project-description">
                    {project.description.substring(0, 100)}
                    {project.description.length > 100 ? '...' : ''}
                  </p>
                )}
              </div>
            </a>
          ))}
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

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 123, 255, 0.25) !important;
        }
        
        .project-card:hover img {
          transform: scale(1.1);
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .projects-section {
            padding: 60px 30px !important;
          }
          
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 30px !important;
          }
          
          .project-card {
            height: 380px !important;
          }
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 50px 25px !important;
          }
          
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
          
          .project-card {
            height: 350px !important;
          }
          
          .project-title {
            font-size: 20px !important;
          }
          
          .project-description {
            font-size: 13px !important;
          }
        }

        @media (max-width: 480px) {
          .projects-section {
            padding: 40px 20px !important;
          }
          
          .projects-grid {
            gap: 20px !important;
          }
          
          .project-card {
            height: 320px !important;
          }
          
          .project-image-container {
            height: 200px !important;
          }
          
          .project-card-content {
            padding: 20px !important;
          }
          
          .project-title {
            font-size: 18px !important;
            margin-bottom: 8px !important;
          }
          
          .project-description {
            font-size: 12px !important;
          }
          
          .project-category {
            font-size: 10px !important;
            padding: 5px 12px !important;
          }
          
          .view-project-text {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 40px',
    background: 'linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)',
    position: 'relative',
    overflow: 'hidden',
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
    className: 'projects-grid',
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    animation: 'slideInCard 0.8s ease-out backwards',
    className: 'project-card',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '250px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '20px',
  },
  overlayContent: {
    width: '100%',
  },
  category: {
    display: 'inline-block',
    padding: '6px 16px',
    background: '#007bff',
    color: '#fff',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  viewProject: {
    marginTop: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewProjectText: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  },
  cardContent: {
    padding: '25px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: '0 0 12px 0',
    lineHeight: '1.3',
  },
  cardDescription: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.6',
    margin: 0,
  },
};
