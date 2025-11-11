import { Link } from 'react-router-dom'
import './Blog.css'

function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Future of Knowledge Discovery",
      description: "Exploring how artificial intelligence is transforming the way we discover, connect, and synthesize information across domains. From research acceleration to creative insights, AI-powered tools are reshaping human knowledge work.",
      link: "#",
      date: "November 11, 2025",
      image: `${import.meta.env.BASE_URL}images/sly.webp`
    }
  ]

  return (
    <div className="blog-container">
      <header className="blog-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Blog</h1>
        <p className="blog-subtitle">Insights on knowledge discovery and AI-powered research</p>
      </header>

      <div className="blog-posts">
        {posts.map(post => (
          <article key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <time className="post-date">{post.date}</time>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-description">{post.description}</p>
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="post-link"
              >
                Read more →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Blog

