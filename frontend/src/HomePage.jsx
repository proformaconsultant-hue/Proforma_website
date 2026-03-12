import React from 'react'
import { Header } from './components/Header.jsx'
import { ServiceHero } from './components/frontpage.jsx'
import { Introduction } from './components/Introduction.jsx'
import { CompanyDetail } from './components/CompanyDetail.jsx'
import { TeamCarousel } from './components/TeamCarousel.jsx'
import {OurServices} from './components/OurServices.jsx'
import { OurProjects } from './components/OurProjects.jsx'
import { Footer } from './components/Footer.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { Facebook, Instagram, Linkedin, Phone } from 'lucide-react'


export const HomePage = () => {
  return (
    <>
      <style>{`

  .social-sidebar {
          position: fixed;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 999;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: rgba(30, 30, 30, 0.85);
          padding: 15px 10px;
          border-radius: 50px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .social-sidebar-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          color: var(--white);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          position: relative;
        }

        .social-sidebar-link:hover {
          transform: scale(1.15);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }

        .social-sidebar-link.facebook {
          background: #1877F2;
        }

        .social-sidebar-link.facebook:hover {
          background: #1565d8;
        }

        .social-sidebar-link.instagram {
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
        }

        .social-sidebar-link.instagram:hover {
          background: linear-gradient(45deg, #e08025, #d4572e, #c91f38, #b81e59, #a8157a);
        }

        .social-sidebar-link.whatsapp {
          background: #25D366;
        }

        .social-sidebar-link.whatsapp:hover {
          background: #20ba5a;
        }

        .social-sidebar-link.linkedin {
          background: #0077B5;
        }

        .social-sidebar-link.linkedin:hover {
          background: #006399;
        }

        .social-sidebar-link svg {
          color: white;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }
        @media (max-width: 768px) {

          .social-sidebar {
            right: 8px;
            padding: 10px 6px;
            gap: 8px;
          }

          .social-sidebar-link {
            width: 38px;
            height: 38px;
          }

          .social-sidebar-link svg {
            width: 16px;
            height: 16px;
          }
        }

       

        @media (max-width: 480px) {
          .social-sidebar {
            right: 6px;
            padding: 8px 4px;
            gap: 6px;
          }

          .social-sidebar-link {
            width: 34px;
            height: 34px;
          }

          .social-sidebar-link svg {
            width: 14px;
            height: 14px;
          }
        }

        `}
        </style>
    <div className="home-page">
      <Header />
      {/* Sticky Social Media Sidebar */}
      <div className="social-sidebar">
        <a href="https://www.facebook.com/profile.php?id=61586117833991" target="_blank" rel="noopener noreferrer" className="social-sidebar-link facebook" title="Facebook">
          <Facebook size={20} />
        </a>
        <a href="https://www.instagram.com/proformainsights/" target="_blank" rel="noopener noreferrer" className="social-sidebar-link instagram" title="Instagram">
          <Instagram size={20} />
        </a>
        <a href="https://wa.me/9779744500107" target="_blank" rel="noopener noreferrer" className="social-sidebar-link whatsapp" title="WhatsApp: 9744500107">
          <Phone size={20} />
        </a>
        <a href="https://www.linkedin.com/company/proforma-insight/" target="_blank" rel="noopener noreferrer" className="social-sidebar-link linkedin" title="LinkedIn">
          <Linkedin size={20} />
        </a>
      </div>

      <main className="home-content">
        <ServiceHero />
        <HeroSection />
        <OurServices/>
        <OurProjects />
        <CompanyDetail />
        <TeamCarousel />
      </main>
      <Footer />
    </div>
   </>
  )
}

