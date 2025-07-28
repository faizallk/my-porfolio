import React from "react";
import BlogCard from "../components/BlogCard";
function Blog() {
  const blogs = [
    {
      date: "June 15, 2023",
      title: "Building Scalable React Applications: Best Practices",
      description:
        "Learn how to structure your React applications for scalability and maintainability. This article covers component architecture, state management, and performance optimization techniques.",
      readMoreLink: "https://example.com/articles/react-scalability",
    },
    {
      date: "May 22, 2023",
      title: "NoSQL vs SQL: Choosing the Right Database for Your Project",
      description:
        "A comprehensive comparison of SQL and NoSQL databases, their strengths, weaknesses, and ideal use cases to help you make the right choice for your next project.",
      readMoreLink: "https://example.com/articles/sql-vs-nosql",
    },
    {
      date: "April 10, 2023",
      title: "Getting Started with TypeScript: A Practical Guide",
      description:
        "Discover how TypeScript can improve your JavaScript development experience with static typing, better tooling, and enhanced code quality.",
      readMoreLink: "https://example.com/articles/typescript-guide",
    }, {
      date: "June 15, 2023",
      title: "Building Scalable React Applications: Best Practices",
      description:
        "Learn how to structure your React applications for scalability and maintainability. This article covers component architecture, state management, and performance optimization techniques.",
      readMoreLink: "https://example.com/articles/react-scalability",
    },
    {
      date: "May 22, 2023",
      title: "NoSQL vs SQL: Choosing the Right Database for Your Project",
      description:
        "A comprehensive comparison of SQL and NoSQL databases, their strengths, weaknesses, and ideal use cases to help you make the right choice for your next project.",
      readMoreLink: "https://example.com/articles/sql-vs-nosql",
    },
    {
      date: "April 10, 2023",
      title: "Getting Started with TypeScript: A Practical Guide",
      description:
        "Discover how TypeScript can improve your JavaScript development experience with static typing, better tooling, and enhanced code quality.",
      readMoreLink: "https://example.com/articles/typescript-guide",
    },
  ];

  return (
    <div className="w-full px-15 py-5">
      <h2 className="text-5xl font-semibold mb-2">My Blogs</h2>
      <p>Welcome to my blog! Here are some of my latest posts:</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default Blog;
