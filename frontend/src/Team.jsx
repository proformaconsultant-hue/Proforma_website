import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Mail, Phone, Linkedin, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from './services/api';

export const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const data = await api.getTeamMembers();
        if (data && data.length > 0) {
          // Transform API data to match expected format
          const transformedData = data.map(member => ({
            id: member.id,
            name: member.name,
            position: member.position,
            bio: member.bio,
            // Check if image already has full URL or just path
            image: member.image ? (
              member.image.startsWith('http') 
                ? member.image 
                : `http://localhost:8000${member.image}`
            ) : "https://via.placeholder.com/400",
            email: member.email,
            phone: member.phone,
            linkedin: member.linkedin
          }));
          setTeamMembers(transformedData);
        } else {
          setTeamMembers([]);
        }
      } catch (error) {
        console.error('Error fetching team members:', error);
        setTeamMembers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMembers = teamMembers.slice(startIndex, endIndex);

  // Auto-slide effect
  useEffect(() => {
    if (loading || isPaused || teamMembers.length <= itemsPerPage) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    }, 5000); // Change page every 5 seconds

    return () => clearInterval(interval);
  }, [loading, isPaused, teamMembers.length, totalPages, itemsPerPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <div className="team-page">
      <Header />

      {/* Hero Section */}
      <div className="team-hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              Meet Our Team
            </h1>
            <p className="hero-subtitle">
              A dedicated team of professionals committed to delivering exceptional
              financial and business consulting services.
            </p>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-section-title">Our Expert Team</h2>
          <p className="team-section-subtitle">
            Meet the talented individuals who make Proforma Insights a leader in business consultancy
          </p>
        </div>
        {loading ? (
          <div style={{ padding: '50px', textAlign: 'center' }}>Loading team members...</div>
        ) : (
          <>
            <div 
              className="team-members-grid"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {currentMembers.map((member) => (
                <div key={member.id} className="team-member-card">
                  <div className="team-member-image-container">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-member-photo"
                    />
                    <div className="team-member-overlay">
                      <div className="contact-icons">
                        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-icon"
                          title="Send Email" >
                          <Mail size={20} />
                        </a>
                        <a href={`tel:${member.phone}`} className="contact-icon" title="Call">
                          <Phone size={20} />
                        </a>
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="contact-icon" title="LinkedIn">
                            <Linkedin size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="team-member-info">
                    <h3 className="team-member-name">{member.name}</h3>
                    <div className="team-member-role-badge">{member.position}</div>
                    <p className="team-member-bio">{member.bio}</p>

                    <div className="team-member-contact">
                      <div className="contact-info">
                        <Mail size={16} />
                        <span className="contact-text">{member.email}</span>
                      </div>
                      <div className="contact-info">
                        <Phone size={16} />
                        <span className="contact-text">{member.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="carousel-pagination">
                <button 
                  onClick={handlePrevPage} 
                  className="carousel-nav-button"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="carousel-page-indicator">
                  <span className="carousel-page-current">{currentPage + 1}</span>
                  <span className="carousel-page-separator">/</span>
                  <span className="carousel-page-total">{totalPages}</span>
                </div>
                <button 
                  onClick={handleNextPage} 
                  className="carousel-nav-button"
                  aria-label="Next page"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}

            {/* Progress Dots */}
            {totalPages > 1 && (
              <div className="carousel-dots">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`carousel-dot ${index === currentPage ? 'active' : ''}`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* CTA Section */}
      <div className="container">
        <div className="team-cta-section">
          <h2 className="cta-title-1">Ready to Work With Our Team?</h2>
          <p className="cta-subtitle-1">
            Contact us today to discuss how our expert team can help your business grow
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button secondary">
              Contact Us
            </Link>
            <Link to="/services" className="cta-button secondary">
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}