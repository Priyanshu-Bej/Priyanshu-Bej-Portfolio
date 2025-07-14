import { useEffect, useState } from "react";
import { FiArrowLeft, FiExternalLink, FiLink, FiSmartphone } from "react-icons/fi";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Define posts manually since we can't dynamically import all files
    const postsData = [
      {
        slug: "my-first-post",
        title: "My First Blog Post",
        date: "2024-06-10",
        excerpt: "This is the first post on my new blog!"
      },
      {
        slug: "another-article",
        title: "Another Article",
        date: "2024-06-11",
        excerpt: "A quick look at how to add a blog to your portfolio."
      },
      {
        slug: "new-post",
        title: "How to Add New Blog Posts",
        date: "2024-06-12",
        excerpt: "A guide on adding new posts to your portfolio blog."
      }
    ];
    setPosts(postsData);
  }, []);

  // Copy link to clipboard
  const copyLink = (slug) => {
    navigator.clipboard.writeText(`${window.location.origin}/blog/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#18181b] to-[#232526] py-0 px-0 flex flex-col items-center relative">
      {/* Back to Portfolio Button */}
      <a
        href="https://www.priyanshubej.com/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white font-semibold hover:bg-white/20 transition-all duration-200"
        style={{textDecoration: 'none'}}
      >
        <FiArrowLeft className="text-xl" /> Back to Portfolio
      </a>
      {/* Modern Glassy Header */}
      <div className="w-full flex justify-center items-center relative mb-10">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#804dee]/40 via-[#232526]/60 to-[#00cea8]/30 blur-2xl opacity-60 animate-pulse" />
        <div className="relative z-10 max-w-3xl w-full mx-auto px-4">
          <div className="rounded-3xl bg-white/10 backdrop-blur-2xl shadow-2xl border border-white/20 px-8 py-12 flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Floating Mobile Icon */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center relative">
              <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-[#804dee] to-[#00cea8] shadow-2xl border-4 border-white/20 mb-4 animate-float">
                <FiSmartphone className="text-4xl text-white drop-shadow-lg" />
              </span>
            </div>
            {/* Title and Subtitle */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-5xl sm:text-6xl font-extrabold mb-3 violet-gradient bg-clip-text text-transparent drop-shadow-lg tracking-tight leading-tight">Mobile Developer Blog</h1>
              <p className="text-2xl text-[#b3b3ff] font-semibold mb-2 tracking-wide">Insights, Tutorials & Stories from a Mobile App Developer</p>
              <p className="text-lg text-gray-200 mb-2 font-medium">Welcome! Here you&apos;ll find articles about Flutter, Android, iOS, and all things mobile development.</p>
            </div>
            {/* Animated Glow SVG on the right */}
            <div className="hidden sm:block flex-shrink-0 relative">
              <svg className="absolute right-0 top-0 z-0 animate-pulse" width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="70" cy="70" rx="60" ry="40" fill="#804dee" fillOpacity="0.18" />
                <ellipse cx="100" cy="40" rx="20" ry="12" fill="#00cea8" fillOpacity="0.13" />
                <ellipse cx="40" cy="100" rx="14" ry="8" fill="#bf61ff" fillOpacity="0.10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Blog List */}
      <div className="w-full max-w-3xl px-4">
        <ul className="space-y-10">
          {posts.map((post, idx) => (
            <>
              <li
                key={post.slug}
                className="relative flex group cursor-pointer"
              >
                {/* Block Accent Bar */}
                <div className="w-2 rounded-l-2xl bg-gradient-to-b from-[#804dee] to-[#3a1c71] mr-0.5" />
                {/* Card Content */}
                <div
                  className="flex-1 p-6 rounded-r-2xl rounded-bl-2xl bg-[#18181b]/80 backdrop-blur-md shadow-2xl border border-white/20 transition-transform duration-200 hover:scale-[1.03] hover:shadow-3xl hover:border-[#804dee]"
                  style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base text-[#b3b3ff] font-mono tracking-wide">{post.date}</span>
                    <div className="flex gap-2">
                      <a
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#804dee] text-white font-semibold hover:bg-[#3a1c71] transition shadow-md"
                      >
                        Read <FiExternalLink className="ml-1" />
                      </a>
                      <button
                        onClick={() => copyLink(post.slug)}
                        title="Copy link"
                        className="inline-flex items-center gap-1 px-2 py-1.5 rounded-md bg-[#232526] text-[#b3b3ff] hover:bg-[#804dee] hover:text-white transition border border-[#3a1c71]"
                      >
                        <FiLink />
                      </button>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-1 text-white group-hover:text-[#804dee] transition-colors duration-200 font-poppins">{post.title}</h2>
                  <p className="text-gray-200 group-hover:text-gray-100 transition-colors duration-200 font-medium">{post.excerpt}</p>
                </div>
              </li>
              {/* Blocky Divider */}
              {idx !== posts.length - 1 && (
                <div className="flex items-center my-2">
                  <div className="w-2 h-4 bg-[#804dee] rounded-l-xl" />
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-[#804dee] via-[#3a1c71] to-transparent" />
                </div>
              )}
            </>
          ))}
        </ul>
      </div>
      {/* About this Blog Section */}
      <div className="w-full max-w-3xl px-4 mt-16 mb-10">
        <div className="p-6 rounded-2xl bg-[#18181b]/80 backdrop-blur-md shadow-lg border border-white/20 text-center">
          <h3 className="text-2xl font-bold mb-2 text-[#804dee]">About this Blog</h3>
          <p className="text-gray-200 text-lg">This blog is curated by Priyanshu Bej, a passionate Mobile App Developer. Here you&apos;ll find hands-on tutorials, industry insights, and personal stories from the world of mobile development. Whether you&apos;re into Flutter, Android, iOS, or just love building apps, you&apos;re in the right place!</p>
        </div>
      </div>
    </div>
  );
};

export default Blog; 