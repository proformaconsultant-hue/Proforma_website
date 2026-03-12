import React, { useState, useEffect } from 'react';
import { Mail, Phone } from 'lucide-react';
import api from '../services/api';

export const TeamCarousel = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await api.getTeamMembers();
        // Duplicate the array to create seamless loop
        setTeamMembers([...data, ...data]);
      } catch (error) {
        console.error('Error fetching team members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (loading) {
    return <div className="team-carousel-loading">Loading team...</div>;
  }

  return (
    <section className="team-carousel-section">
      <div className="team-carousel-container">
        <h2 className="team-carousel-title">Meet Our Team</h2>
        <p className="team-carousel-subtitle">
          Dedicated professionals committed to your success
        </p>

        <div className="team-carousel-wrapper">
          <div className="team-carousel-track">
            {teamMembers.map((member, index) => (
              <div key={`${member.id}-${index}`} className="team-card">
                <div className="team-card-image-wrapper">
                  <img
                    src={member.image || 'http://localhost:8000/media/team/default_profile.png'}
                    alt={member.name}
                    className="team-card-image"
                    onError={(e) => {
                      e.target.src = 'http://localhost:8000/media/team/default_profile.png';
                    }}
                  />
                </div>
                <div className="team-card-content">
                  <h3 className="team-card-name">{member.name}</h3>
                  <p className="team-card-position">{member.position}</p>
                  <div className="team-card-contact">
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="team-contact-link">
                        <Mail size={16} />
                        <span>{member.email}</span>
                      </a>
                    )}
                    {member.phone && (
                      <a href={`tel:${member.phone}`} className="team-contact-link">
                        <Phone size={16} />
                        <span>{member.phone}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
