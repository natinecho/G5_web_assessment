"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useGetBlogByIdQuery } from "../../redux/Api/blogApi";
import Image from "next/image";
import Loader from "../../component/Loading";
import BlogCard from "../../component/RelatedBlogCard";
import { SlLike } from "react-icons/sl";
import Link from "next/link";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

// Mock data for related blogs
const relatedBlogs = [
  {
    _id: "64dfe79d50961c55ce93e7e4",
    image: "https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg",
    title: "Mastering the Art of Code Refactoring",
    description: "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
    author:  {
      _id: "64dfe6fb50961c55ce93e7de",
      name: "bruke updated",
      email: "bruk@a2sv.org",
      image: "https://res.cloudinary.com/djtkzulun/image/upload/v1702997841/A2sv/lumtcitvklvajczcynqe.png",
      role: "user"
    },
    isPending: true,
    tags: [
      "Programming",
      "Code"
    ],
    likes: 0,
    relatedBlogs: [],
    skills: [],
    createdAt: "2023-08-18T21:50:21.755Z",
    updatedAt: "2023-08-18T21:50:21.755Z",
    __v: 0
  },
  {
    _id: "64dfe79d50961c55ce93e7e4",
    image: "https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg",
    title: "Mastering the Art of Code Refactoring",
    description: "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
    author:  {
      _id: "64dfe6fb50961c55ce93e7de",
      name: "bruke updated",
      email: "bruk@a2sv.org",
      image: "https://res.cloudinary.com/djtkzulun/image/upload/v1702997841/A2sv/lumtcitvklvajczcynqe.png",
      role: "user"
    },
    isPending: true,
    tags: [
      "Programming",
      "Code"
    ],
    likes: 0,
    relatedBlogs: [],
    skills: [],
    createdAt: "2023-08-18T21:50:21.755Z",
    updatedAt: "2023-08-18T21:50:21.755Z",
    __v: 0
  },
  {
    _id: "64dfe79d50961c55ce93e7e4",
    image: "https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg",
    title: "Mastering the Art of Code Refactoring",
    description: "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
    author:  {
      _id: "64dfe6fb50961c55ce93e7de",
      name: "bruke updated",
      email: "bruk@a2sv.org",
      image: "https://res.cloudinary.com/djtkzulun/image/upload/v1702997841/A2sv/lumtcitvklvajczcynqe.png",
      role: "user"
    },
    isPending: true,
    tags: [
      "Programming",
      "Code"
    ],
    likes: 0,
    relatedBlogs: [],
    skills: [],
    createdAt: "2023-08-18T21:50:21.755Z",
    updatedAt: "2023-08-18T21:50:21.755Z",
    __v: 0
  },
  
];

const BlogDetails: React.FC = () => {
  const params = useParams();
  const blogId = params.id as string;

  const {
    data: blog,
    error,
    isLoading,
    isError,
  } = useGetBlogByIdQuery(blogId, { skip: !blogId });

  console.log("here is the blog",blog)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  if (isError || !blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Error loading blog data.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center max-w-[70%] mx-auto p-8 gap-6">
        <h1 className="text-4xl font-bold font-fell mb-4">{blog.title}</h1>
        <div className="flex mb-4 gap-3">
          {blog.tags?.map((tag, index) => (
            <span key={index} className="text-sm">
              {tag}
            </span>
          ))}
        </div>
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={600}
          className="rounded-lg object-cover w-full h-96"
        />
        <div className="flex flex-col items-center mb-6 gap-3">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image
              src={blog.author?.image}
              alt={blog.author?.name}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-3">
              <p className="text-lg">{blog.author?.name}</p>
              <p>|</p>
              <p className="text-lg">{blog.author?.role}</p>
            </div>
            <div>{blog.author?.email}</div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <div
            className="text-xl font-semibold line-clamp-2"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
          <div
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </div>
      </div>
      <div className="flex items-center justify-start w-[90%] mt-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Related Blogs</h2>
          <div className="flex justify-between items-center flex-wrap gap-10">
            {relatedBlogs?.map((relatedBlog) => (
             <BlogCard key={relatedBlog._id} relatedBlog = {relatedBlog}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
