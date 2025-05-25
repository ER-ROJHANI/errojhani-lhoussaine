import React from 'react';
import '../styles/Blog.css';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "UI/UX Essential Tips",
      image: "/blog/ui-ux-tips.jpg",
      category: "Design",
      date: "Mar 15, 2024"
    },
    {
      id: 2,
      title: "Frontend Development",
      image: "/blog/frontend-dev.jpg",
      category: "Development",
      date: "Mar 12, 2024"
    },
    {
      id: 3,
      title: "Portfolio Guide",
      image: "/blog/portfolio-guide.jpg",
      category: "Career",
      date: "Mar 10, 2024"
    },
    {
      id: 4,
      title: "Developer Tools",
      image: "/blog/dev-tools.jpg",
      category: "Technology",
      date: "Mar 8, 2024"
    }
  ];

  return (
    <section id="blog" className="blog-section">
      <div className="section-header">
        <h2>Blog Insights</h2>
        <p className="section-subtitle">Latest articles and resources for developers</p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-post">
            <div className="blog-post-image">
              <img src={post.image} alt={post.title} />
              <div className="blog-post-category">{post.category}</div>
            </div>
            <div className="blog-post-content">
              <h3>{post.title}</h3>
              <time>{post.date}</time>
              <a href={`/blog/${post.id}`} className="read-more">
                Read Article
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;