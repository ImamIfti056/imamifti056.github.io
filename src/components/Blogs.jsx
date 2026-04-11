import { motion, useInView } from "framer-motion";
import { ExternalLink, Calendar, Heart, MessageCircle, Tag } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { getBlogs } from "../services/getBlogs";

const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Blogs() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.5 });
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
    <>
      <section
        id="blogs"
        className="min-h-screen px-4 flex flex-col items-start justify-center max-w-5xl mx-auto"
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 md:mb-12"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          variants={fadeVariant}
          custom={0}
          transition={{ duration: 0.6 }}
        >
          Blogs
        </motion.h1>

        {loading ? (
          <motion.div
            className="flex items-center justify-center w-full h-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-10 h-10 border-4 border-t-transparent border-white rounded-full animate-spin" />
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 w-full"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeVariant}
            custom={1}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {blogs && blogs.map((blog) => (
              <a
                key={blog.id}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-lg border-l-2 border-[var(--primary-bg)] hover:bg-gray-900 hover:bg-opacity-30 transition-all duration-300 cursor-pointer group"
              >
                {/* Cover Image */}
                {blog.cover_image && (
                  <div className="mb-4 rounded-md overflow-hidden">
                    <img
                      src={blog.cover_image}
                      alt={blog.title}
                      className="w-full h-24 md:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-sm sm:text-lg font-semibold mb-2 flex gap-2 items-start group-hover:text-[var(--primary-bg)] transition-colors">
                  <span className="flex-1">{blog.title}</span>
                  <ExternalLink className="w-4 h-4 flex-shrink-0 mt-1" />
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-3 line-clamp-3">
                  {blog.description}
                </p>

                {/* Tags */}
                {blog.tag_list && blog.tag_list.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {blog.tag_list.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-700 rounded-full flex items-center gap-1"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Metadata */}
                <div className="flex flex-wrap gap-3 text-gray-500 text-sm items-center">
                  {/* Published Date */}
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    {new Date(blog.published_at).toLocaleDateString()}
                  </span>

                  {/* Reactions */}
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-red-400" />
                    {blog.public_reactions_count}
                  </span>

                  {/* Comments */}
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-green-400" />
                    {blog.comments_count}
                  </span>

                  {/* Reading Time */}
                  <span className="text-xs italic">
                    {blog.reading_time_minutes} min read
                  </span>
                </div>
              </a>
            ))}
          </motion.div>
        )}
      </section>
    </>
  );
}
