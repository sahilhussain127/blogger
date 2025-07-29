/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleBlogCall } from "../redux/actions/userActions";
import { isEmpty } from "lodash";
import dayjs from "dayjs";
// import { selectUser } from "@/redux/selectors"; // adjust path as needed

const SingleBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const categories = ["Education", "Tech", "Lifestyle", "Research"];
  const [blog, setBlog] = useState({});

  const fetchSingleBlog = async () => {
    dispatch(
      singleBlogCall(id, (data) => {
        setBlog(data);
      })
    );
  };
  console.log(blog);
  useEffect(() => {
    fetchSingleBlog();
  }, []);

  return (
    !isEmpty(blog) && (
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Blog image */}
        <img
          src={`data:image/*;base64,${blog.thumbnail}`}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-xl shadow-md mb-6"
        />

        {/* Category */}
        <span className="text-pink-600 font-semibold text-sm uppercase tracking-wide">
          {blog.category}
        </span>

        {/* Title */}
        <h1 className="text-3xl font-bold mt-2 mb-4 text-gray-900">
          {blog.title}
        </h1>

        {/* Meta Info */}

        <p className="text-sm text-gray-500">
          Posted on{" "}
          {dayjs(blog.created_at.split(".")[0]).format("MMM D, YYYY h:mm A")} by{" "}
          <b>{blog.created_by}</b>
        </p>

        {/* Blog Body */}
        <p className="text-gray-800 leading-relaxed text-lg whitespace-pre-line">
          {blog.description}
        </p>
      </div>
    )
  );
};

export default SingleBlog;
