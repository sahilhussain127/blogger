/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import CloseIcon from "@mui/icons-material/Close";

import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/selectors";
import {
  createBlogCall,
  deleteBlogCall,
  selfCall,
} from "../redux/actions/userActions";
import {
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const categories = ["Education", "Tech", "Lifestyle", "Research"];
  const [blogs, setBlogs] = useState([]);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);

  const [blog, setBlog] = useState({
    title: "",
    description: "",
    category: "",
  });

  const handleCreateClick = () => setOpenCreateDialog(true);
  const handleCloseDialog = () => {
    setOpenCreateDialog(false);
    setBlog({
      title: "",
      description: "",
      category: "",
    });
  };

  const fetchProfileBlogs = async () => {
    dispatch(
      selfCall((data) => {
        setBlogs(data.blogs);
      })
    );
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("description", blog.description);
    formData.append("category", blog.category);
    formData.append("thumbnail", blog.thumbnail);
    formData.append("createdById", user.id);

    dispatch(
      createBlogCall(
        formData,
        (data) => {
          console.log("Blog created!", data);
          fetchProfileBlogs();
        },
        (err) => {
          console.error("Blog creation failed:", err);
        }
      )
    );
    handleCloseDialog();
  };

  const handleDeletBlog = (id) => {
    dispatch(
      deleteBlogCall(id, () => {
        fetchProfileBlogs();
      })
    );
  };

  useEffect(() => {
    fetchProfileBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-grayLight p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-darkText">My Profile</h1>
        <button
          onClick={handleCreateClick}
          className="flex items-center space-x-2 bg-primaryGradientStart hover:bg-primaryGradientEnd text-white px-5 py-2 rounded-full font-semibold"
        >
          <PlusIcon className="w-5 h-5" />
          <span>Create Blog</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(({ id, category, title, description, date, thumbnail }) => (
          <div key={id} className="bg-white rounded-lg p-5 shadow-md relative">
            {thumbnail && (
              <img
                src={`data:image/*;base64,${thumbnail}`}
                alt="Blog Thumbnail"
                className="w-full h-40 object-cover rounded mb-3"
              />
            )}
            <span className="text-xs font-semibold text-primaryGradientEnd">
              {category}
            </span>
            <Link to={`/blogs/${id}`}>
              <h2 className="font-bold text-lg mt-1 hover:underline text-primary cursor-pointer">
                {title}
              </h2>
            </Link>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
            <p className="text-xs text-gray-400 mt-4">{date}</p>
            <button
              onClick={() => handleDeletBlog(id)}
              className="absolute top-3 right-3 bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-700 p-2 rounded-full shadow-sm transition duration-150 ease-in-out"
              aria-label="Delete Blog"
              title="Delete Blog"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <Dialog
        open={openCreateDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="sm"
      >
        {/* Top Title Bar Styled Like Header */}
        <div className="bg-gradient-to-r from-primaryGradientEnd to-primaryGradientStart px-6 py-4 flex justify-between items-center">
          <h2 className="text-white text-lg font-semibold">Create Blog</h2>
          <IconButton onClick={handleCloseDialog}>
            <CloseIcon className="text-white" />
          </IconButton>
        </div>

        <DialogContent className="bg-grayLight">
          <div className="flex flex-col space-y-4 mt-2">
            <div className="flex flex-col gap-2">
              <label>
                <div className="cursor-pointer bg-white text-gray-800 border border-gray-300 rounded px-4 py-2 w-fit hover:shadow">
                  Choose Image
                </div>
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) =>
                    setBlog({ ...blog, thumbnail: e.target.files[0] })
                  }
                />
              </label>

              {blog.thumbnail && (
                <img
                  src={URL.createObjectURL(blog.thumbnail)}
                  alt="Thumbnail Preview"
                  className="mt-2 w-32 h-32 object-cover rounded shadow"
                />
              )}
            </div>

            <TextField
              variant="outlined"
              label="Title"
              fullWidth
              value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            />
            <Select
              displayEmpty
              fullWidth
              value={blog.category}
              onChange={(e) => setBlog({ ...blog, category: e.target.value })}
            >
              <MenuItem value="" disabled>
                Select Category
              </MenuItem>
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={blog.description}
              onChange={(e) =>
                setBlog({ ...blog, description: e.target.value })
              }
            />
          </div>
        </DialogContent>

        <DialogActions className="bg-grayLight px-6 pb-4">
          <button
            className="text-primaryGradientEnd font-semibold mr-4"
            onClick={handleCloseDialog}
          >
            CANCEL
          </button>
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-br from-primaryGradientStart to-primaryGradientEnd text-white px-6 py-2 rounded-full font-semibold shadow-md"
          >
            CREATE
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Profile;
