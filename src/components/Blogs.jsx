/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/selectors";
import { blogsCall, selfCall } from "../redux/actions/userActions";

const Blogs = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    dispatch(
      blogsCall((data) => {
        setBlogs(data);
      })
    );
    dispatch(selfCall((data) => {}));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="bg-grayLight min-h-screen">
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={`data:image/*;base64,${blog.thumbnail}`}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
