import React from "react";
import Navbar from "./Navbar";

const blogData = [
  {
    title: "Printing and embellishing: Get the ‘wow’ factor",
    category: "Trends & Research",
    date: "02-16-2023",
    description: "Adobe’s PDF Print Engine eases the communication...",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "How digital document collaboration helps school admins",
    category: "Document Cloud",
    date: "02-16-2023",
    description: "Discover the perks of digital document collaboration...",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Scotch Oakburn College innovates...",
    category: "Education",
    date: "02-15-2023",
    description: "Located in Australia’s island State of Tasmania...",
    image: "https://via.placeholder.com/300x200",
  },
  // Add 3 more blog items here...
];

const Blogs = () => {
  return (
    <div className="bg-grayLight min-h-screen">
      <Navbar />
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-primaryGradientEnd font-semibold">
                {blog.category}
              </p>
              <h3 className="text-lg font-bold text-darkText mt-1">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
              <p className="text-xs text-gray-400 mt-4">{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
