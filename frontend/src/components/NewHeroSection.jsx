import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MousePointer2 } from 'lucide-react';

export const NewHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Floating keywords for IT side - reduced to 3 (removed Technology from top)
  const itKeywords = [
    { text: 'Innovation', position: 'it-1', cursorColor: '#3b82f6' }, // Blue
    { text: 'Digital Marketing', position: 'it-3', cursorColor: '#f59e0b' }, // Orange
    { text: 'Cloud Computing', position: 'it-4', cursorColor: '#8b5cf6' }  // Purple
  ];

  // Floating keywords for Accounting side - reduced to 3 (removed Financial Analysis from top)
  const accountingKeywords = [
    { text: 'Tax Planning', position: 'acc-1', cursorColor: '#ef4444' }, // Red
    { text: 'Audit Services', position: 'acc-3', cursorColor: '#f59e0b' }, // Orange
    { text: 'Compliance', position: 'acc-4', cursorColor: '#8b5cf6' }  // Purple
  ];

  return (
    <div className={`new-hero-section ${isVisible ? 'animate-in' : ''}`}>
      <div className="hero-split-container">
        {/* Left Side - IT */}
        <div className="hero-split-side hero-left">
          {/* Keywords for IT */}
          {itKeywords.map((keyword, index) => (
            <div key={index} className={`static-keyword ${keyword.position}`}>
              <div className="keyword-box">
                {keyword.text}
              </div>
              <MousePointer2 
                className="keyword-cursor" 
                size={16} 
                style={{ color: keyword.cursorColor }}
              />
            </div>
          ))}

          <div className="hero-split-content hero-animate-left">
            <h1 className="hero-split-title">
              Proforma<br />
              for <span className="highlight-orange">IT</span>
            </h1>
            <p className="hero-split-subtitle">Innovative technology solutions to transform your business operations</p>
            <Link to="/it" className="hero-split-button">
              Explore More
            </Link>
          </div>
        </div>

        {/* Divider Line */}
        <div className="hero-divider hero-animate-divider"></div>

        {/* Right Side - Accounting */}
        <div className="hero-split-side hero-right">
          {/* Keywords for Accounting */}
          {accountingKeywords.map((keyword, index) => (
            <div key={index} className={`static-keyword ${keyword.position}`}>
              <div className="keyword-box">
                {keyword.text}
              </div>
              <MousePointer2 
                className="keyword-cursor" 
                size={16}
                style={{ color: keyword.cursorColor }}
              />
            </div>
          ))}

          <div className="hero-split-content hero-animate-right">
            <h1 className="hero-split-title">
              Proforma <span className="no-break">for <span className="highlight-orange">Accounting</span></span>
            </h1>
            <p className="hero-split-subtitle">Professional accounting services tailored to your business needs</p>
            <Link to="/accounting" className="hero-split-button">
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
