import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  useEffect(() => {
    const getContent = async () => {
      try {
        const response = await fetch(`/src/blog/${slug}.md`);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        setContent("# Post Not Found\n\nThis post could not be loaded.");
      }
    };
    getContent();
  }, [slug]);

  // Extract title from markdown frontmatter
  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : "Blog Post";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#232526] to-[#414345] py-0 px-0 flex flex-col items-center relative">
      {/* Back to Portfolio Button */}
      <a
        href="https://www.priyanshubej.com/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white font-semibold hover:bg-white/20 transition-all duration-200"
        style={{textDecoration: 'none'}}
      >
        <FiArrowLeft className="text-xl" /> Back to Portfolio
      </a>
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 mt-24 mb-12" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-[#804dee] hover:text-white font-semibold transition"
        >
          <FiArrowLeft /> Back to Blog
        </button>
        <h1 className="text-4xl font-extrabold mb-8 violet-gradient bg-clip-text text-transparent text-center drop-shadow-lg">
          {title}
        </h1>
        <article className="prose prose-invert max-w-none prose-h1:text-3xl prose-h2:text-2xl prose-p:text-lg prose-a:text-blue-400 prose-a:underline prose-img:rounded-xl prose-img:shadow-lg">
          <ReactMarkdown>{content.replace(/---[\s\S]*?---/, "")}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default BlogPost; 