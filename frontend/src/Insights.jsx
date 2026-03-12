import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import React, { useState, useEffect } from "react";
import { InsightsCard } from "./components/InsightsCard";
import { Link } from "react-router-dom";
import "./Insights.css";
import api from './services/api';
import { ArrowRight, BarChart, ChevronLeft, ChevronRight } from "lucide-react";

export const Insights = () => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const data = await api.getInsights();
        if (data && data.length > 0) {
          // Transform API data to match expected format
          const transformedData = data.map(item => ({
            id: item.id,
            imageSrc: item.image,
            title: item.title,
            excerpt: item.excerpt,
            link: `/insights/${item.slug}`,
            category: item.category,
            date: new Date(item.published_date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            }),
            readTime: item.read_time,
            author: item.author,
            icon: <BarChart size={20} />
          }));
          setInsights(transformedData);
        }
      } catch (error) {
        console.error('Error fetching insights:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  const totalPages = Math.ceil(insights.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentInsights = insights.slice(startIndex, endIndex);

  // Auto-slide effect
  useEffect(() => {
    if (loading || isPaused || insights.length <= itemsPerPage) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    }, 5000); // Change page every 5 seconds

    return () => clearInterval(interval);
  }, [loading, isPaused, insights.length, totalPages, itemsPerPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <div className="insights-page">
      <Header />
      
      {/* Hero Section */}
      <div className="insights-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
               Insights
            </h1>
            <p className="hero-subtitle">
              Stay ahead with our latest research, analysis, and thought leadership in business, 
              technology, and finance.
            </p>
            
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="insights-container">
        <div className="insights-header">
          <h2 className="insights-section-title">Latest Insights</h2>
          <p className="insights-section-subtitle">
            Discover valuable perspectives and actionable advice from our team of experts
          </p>
        </div>
        {/* Insights Grid */}
        {loading ? (
          <div style={{ padding: '50px', textAlign: 'center' }}>Loading insights...</div>
        ) : (
          <>
            <div 
              className="insights-grid"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {currentInsights.map((insight) => (
              <div key={insight.id} className="insight-card-wrapper">
                <InsightsCard 
                  imageSrc={insight.imageSrc}
                  title={insight.title}
                  excerpt={insight.excerpt}
                  link={insight.link}
                  category={insight.category}
                  date={insight.date}
                  readTime={insight.readTime}
                  author={insight.author}
                  icon={insight.icon}
                />
                <Link to={insight.link} className="read-more-link">
                  Read Full Article
                  <ArrowRight size={16} />
                </Link>
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

      <Footer />
    </div>
  );
}