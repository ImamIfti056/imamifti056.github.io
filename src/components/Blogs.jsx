import { ExternalLink, Calendar, Heart, MessageCircle, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import { getBlogs } from "../services/getBlogs";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBlogs("imamifti056")
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
      <section id="blogs" className="page-section">
        <div className="dossier-title-row">
          <div>
            <p className="page-kicker">Writing</p>
            <h1 className="section-heading">Blogs</h1>
          </div>
          <a href="https://dev.to/ImamIfti056" target="_blank" rel="noreferrer" className="dossier-link">
            Dev profile
            <ExternalLink size={17} />
          </a>
        </div>
        <p className="page-lede">
          Notes and articles around engineering practice, learning, and building useful software.
        </p>
        <div className="section-rule" />

        {loading ? (
          <div
            className="flex items-center justify-center w-full h-40"
          >
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[var(--line)] border-t-[var(--primary-bg)]" />
          </div>
        ) : (
          <div className="blog-card-grid">
            {blogs && blogs.map((blog) => (
              <a
                key={blog.id}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-card group"
              >
                <div className="blog-card-image">
                  {blog.cover_image ? (
                    <img
                      src={blog.cover_image}
                      alt={blog.title}
                      className="transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="blog-card-placeholder">DEV</div>
                  )}
                </div>

                <h3 className="transition-colors group-hover:text-[var(--primary-bg)]">
                  <span className="flex-1">{blog.title}</span>
                </h3>

                <p>
                  {blog.description}
                </p>

                {blog.tag_list && blog.tag_list.length > 0 && (
                  <div className="chip-group">
                    {blog.tag_list.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="chip"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="blog-card-meta">
                  <span className="chip">
                    <Calendar className="w-4 h-4 icon-accent" />
                    {new Date(blog.published_at).toLocaleDateString()}
                  </span>

                  <span className="chip">
                    <Heart className="w-4 h-4 text-[var(--accent-warm)]" />
                    {blog.public_reactions_count}
                  </span>

                  <span className="chip">
                    <MessageCircle className="w-4 h-4 icon-accent" />
                    {blog.comments_count}
                  </span>

                  <span className="chip">
                    {blog.reading_time_minutes} min read
                  </span>
                </div>
                <span className="blog-card-action">
                  <ExternalLink size={18} />
                </span>
              </a>
            ))}
          </div>
        )}
      </section>
  );
}
