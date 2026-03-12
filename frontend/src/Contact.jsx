import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import facebookIcon from './images/facebook-new-icon.png';
import instagramIcon from './images/instagram-new-icon.png';
import linkedinIcon from './images/linkedin-icon.png';
import youtubeIcon from './images/youtube-icon.png';
import './Contact.css';
import api from './services/api';

export const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [companyInfo, setCompanyInfo] = useState(null);
  const [socialPosts, setSocialPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const inquiryRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/contact' && location.hash === '#inquiry') {
      // small delay to ensure DOM has rendered
      setTimeout(() => {
        inquiryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const data = await api.getCompanyInfo();
        setCompanyInfo(data);
      } catch (error) {
        console.error('Error fetching company info:', error);
      }
    };
    fetchCompanyInfo();
  }, []);

  useEffect(() => {
    const fetchSocialPosts = async () => {
      try {
        const data = await api.getSocialPosts();
        setSocialPosts(data);
      } catch (error) {
        console.error('Error fetching social posts:', error);
      } finally {
        setLoadingPosts(false);
      }
    };
    fetchSocialPosts();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = {
      first_name: formRef.current['first-name'].value,
      last_name: formRef.current['last-name'].value,
      email: formRef.current['email'].value,
      phone: formRef.current['phone'].value,
      subject: formRef.current['subject'].value,
      message: formRef.current['message'].value,
    };

    try {
      await api.submitContact(formData);
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <Header />

      {/* Hero Banner Section */}
      <div className="contact-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Get In Touch</h1>
          <p className="hero-subtitle">We're here to help you with your financial journey</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="contact-main-content">
        <div className="container">
          {/* Top Contact Cards Section */}
          <div className="contact-cards-section">
            <div className="contact-card">
              <div className="card-icon">
                <MapPin size={28} />
              </div>
              <h3 className="card-title">Our Location</h3>
              <p className="card-text">Pokhara-7, Ratnachowk</p>
              <p className="card-text">Kaski, Nepal</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <Phone size={28} />
              </div>
              <h3 className="card-title">Contact Us</h3>
              <p className="card-text">Phone: 061-545445</p>
              <p className="card-text">Mobile: 9744500107</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <Clock size={28} />
              </div>
              <h3 className="card-title">Working Hours</h3>
              <p className="card-text">Sunday - Friday</p>
              <p className="card-text">10:00 AM - 5:00 PM</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <img src={facebookIcon} alt="Social Media" style={{ width: '28px', height: '28px' }} />
              </div>
              <h3 className="card-title">Follow Us</h3>
              <p className="card-text">Stay updated with our latest news</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61586117833991" target="_blank" rel="noopener noreferrer" className="social-link">
                  <img src={facebookIcon} alt="Facebook" style={{ width: '28px', height: '28px' }} />
                </a>
                <a href="https://www.instagram.com/proformaconsultants/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <img src={instagramIcon} alt="Instagram" style={{ width: '28px', height: '28px' }} />
                </a>
                <a href="https://www.linkedin.com/company/proforma-insight/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <img src={linkedinIcon} alt="LinkedIn" style={{ width: '28px', height: '28px' }} />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <img src={youtubeIcon} alt="YouTube" style={{ width: '28px', height: '28px' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Posts Section - Dynamic from Backend */}
          {!loadingPosts && socialPosts.length > 0 && (
            <div className="social-posts-section">
              <h2 className="section-title">Latest Updates</h2>
              <div className="social-posts-grid">
                {socialPosts.map((post) => {
                  const platformIcon = post.platform === 'facebook' ? facebookIcon :
                                     post.platform === 'instagram' ? instagramIcon :
                                     post.platform === 'linkedin' ? linkedinIcon :
                                     youtubeIcon;
                  
                  return (
                    <div key={post.id} className={`social-post-card ${post.platform}-post`}>
                      <h3 className="social-post-title">
                        <img src={platformIcon} alt={post.platform} style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                        {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)} Update
                      </h3>
                      <div className="post-container">
                        <div 
                          dangerouslySetInnerHTML={{ __html: post.embed_code }}
                          className="social-embed-wrapper"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Two Column Layout: Map + Form */}
          <div className="two-column-section">
            {/* Map Section */}
            <div className="map-section">
              <h2 className="section-title">Find Us on Map</h2>
              <div className="map-container">
                <iframe
                  className="map-iframe"
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1580.5994759576663!2d83.97558819161135!3d28.204317256884618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39959549cdd845fd%3A0x42037efae8914320!2sGandaki%20Province%20Academy%20of%20Science%20and%20Technology%20(GPAST)%20(Administration%20office)!5e0!3m2!1sen!2snp!4v1769156164126!5m2!1sen!2snp"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Form Section */}
            <div id="inquiry" className="form-section" ref={inquiryRef}>
              <h2 className="section-title">Quick Inquiry</h2>
              <div className="form-container">
                <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input type="text" name="first-name" required placeholder="Enter your first name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input type="text" name="last-name" required placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" required placeholder="Enter your email address" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" name="phone" required placeholder="Enter your phone number" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input type="text" name="subject" required placeholder="What is this regarding?" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-textarea"
                      name="message"
                      placeholder="Type your message here..."
                      rows="5"
                    ></textarea>
                  </div>

                  <button className="form-submit-button" type="submit" disabled={status === 'sending'}>
                    <Send size={20} />
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'success' && <p className="form-status success">Message sent — we will contact you shortly.</p>}
                  {status === 'error' && <p className="form-status error">Failed to send message. Please try again later.</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Street View Section */}
      <div className="street-view-section">
        <div className="container">
          <h2 className="section-title">Office View</h2>
          <div className="street-view-container">
            <iframe
              className="street-view-iframe"
              title="Company Office Street View"
              src="https://www.google.com/maps/embed?pb=!4v1769162834575!6m8!1m7!1sXDn-ScisZJIf5E7PLGojpw!2m2!1d28.20412673297622!2d83.97634522444983!3f165.4111801487917!4f8.589582197356151!5f0.7820865974627469"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};