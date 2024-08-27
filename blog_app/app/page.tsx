"use client";
import React, { useState, useMemo } from "react";
import { useGetBlogsQuery } from "./redux/Api/blogApi";
import Loader from "./component/Loading";
import BlogCard from "./component/BlogCard";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const BlogList: React.FC = () => {
  const { data: blogs, error, isLoading } = useGetBlogsQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredBlogs = useMemo(() => {
    return blogs?.filter(blog =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [blogs, searchTerm]);

  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredBlogs?.slice(start, end);
  }, [filteredBlogs, currentPage]);


  const totalPages = Math.ceil((filteredBlogs?.length || 0) / itemsPerPage);

  if (isLoading)<Loader />;

  if (error) return <div>Error</div>;

  return (
    <div>
      <div className="flex px-20 py-10">
        <p className="w-1/5 font-bold text-2xl">Blogs</p>
        <div className="w-4/5 flex items-center justify-center gap-7">
          <input
            type="text"
            placeholder="search"
            className="px-7 py-2 border rounded-3xl border-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button" className="px-7 py-2 bg-[#264FAD] rounded-3xl text-white">
            + New Blog
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-8">
        {paginatedBlogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:bg-gray-200"
        >
          Previous
        </button>
        <span>{currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogList;
