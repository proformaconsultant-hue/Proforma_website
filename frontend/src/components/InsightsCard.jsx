import { Calendar, User, Clock } from "lucide-react";

export const InsightsCard = ({ 
  imageSrc, 
  title, 
  excerpt, 
  link, 
  category, 
  date, 
  readTime, 
  author,
  icon 
}) => {
  return (
    <div className="insights-card">
      <div className="insight-image-container">
        <img
          src={imageSrc}
          alt={title}
          className="insights-card-image"
        />
        <div className="insight-category">
          {icon}
          <span>{category}</span>
        </div>
      </div>
      
      <div className="insight-content">
        <h3 className="insights-card-title">{title}</h3>
        <p className="insight-excerpt">{excerpt}</p>
        
        <div className="insight-meta">
          <div className="meta-item">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className="meta-item">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
          <div className="meta-item">
            <User size={14} />
            <span>{author}</span>
          </div>
        </div>
      </div>
    </div>
  );
}