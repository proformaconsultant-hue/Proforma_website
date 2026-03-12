import { useState, useEffect, useRef } from 'react';
import api from '../services/api';

const CounterItem = ({ end, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let currentCount = 0;
    const increment = Math.ceil(end / 60);
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(currentCount);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div className="counter-item" ref={counterRef}>
      <div className="counter-number">
        {count}
        <span className="counter-suffix">{suffix}</span>
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
};

export function StatsCounter() {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        console.log('Fetching company stats...');
        const data = await api.getCompanyStats();
        console.log('Stats received:', data);
        if (data && data.length > 0) {
          setStats(data);
        } else {
          console.log('No stats data received');
        }
      } catch (error) {
        console.error('Error fetching company stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className={`stats-counter-section ${isInView ? 'animate-in' : ''}`} ref={containerRef}>
      <div className="stats-counter-container">
        <div className="stats-counter-header">
          <h2 className="stats-counter-title">One Stop Solution</h2>
          <p className="stats-counter-subtitle">For Your Daily Needs.</p>
        </div>

        <div className="stats-counter-grid">
          {loading ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '20px' }}>
              Loading statistics...
            </div>
          ) : stats.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '20px' }}>
              No statistics available
            </div>
          ) : (
            stats.map((stat) => (
              <CounterItem 
                key={stat.id}
                end={stat.value} 
                label={stat.label} 
                suffix={stat.suffix || ''} 
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
