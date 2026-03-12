// API configuration and service functions
const API_BASE_URL = 'http://localhost:8000/api';

// Generic fetch function with error handling
const fetchAPI = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};

// API service functions
export const api = {
  // Services
  getServices: () => fetchAPI('/services/'),
  getService: (slug) => fetchAPI(`/services/${slug}/`),

  // Team Members
  getTeamMembers: () => fetchAPI('/team/'),

  // Insights
  getInsights: () => fetchAPI('/insights/'),
  getInsight: (slug) => fetchAPI(`/insights/${slug}/`),
  getFeaturedInsights: () => fetchAPI('/insights/featured/'),

  // Slider Images
  getSliderImages: () => fetchAPI('/slider/'),

  // Company Stats
  getCompanyStats: () => fetchAPI('/stats/'),

  // Company Info
  getCompanyInfo: () => fetchAPI('/company-info/current/'),

  // Core Values
  getCoreValues: () => fetchAPI('/core-values/'),

  // Work Environment Images
  getWorkEnvironmentImages: () => fetchAPI('/work-environment/'),

  // Why Choose Us
  getWhyChooseUs: () => fetchAPI('/why-choose-us/current/'),

  // Social Media Posts
  getSocialPosts: () => fetchAPI('/social-posts/'),

  // Homepage Content
  getHomepage: () => fetchAPI('/homepage/current/'),

  // Projects
  getProjects: () => fetchAPI('/projects/'),
  getFeaturedProjects: () => fetchAPI('/projects/featured/'),
  getProject: (slug) => fetchAPI(`/projects/${slug}/`),

  // Homepage Services
  getHomePageServices: () => fetchAPI('/homepage-services/'),

  // Contact Form
  submitContact: async (formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  },
};

export default api;
