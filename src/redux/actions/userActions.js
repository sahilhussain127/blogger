/* eslint-disable no-unused-vars */
import axios from "axios";
import { setUserData } from "../state/userSlice";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/constants";

// const baseUrl = import.meta.env.VITE_BASE_URL;
// const tokenString = localStorage.getItem("blogger_jwt");
// const token = tokenString ? JSON.parse(tokenString) : null;

// export const fetchUserData =
//   (payload, successCallback, failureCallback) => async (dispatch) => {
//     try {
//       console.log(payload);
//       const response = await axios.get("https://api.example.com/user"); // replace with actual API
//       dispatch(setUserData(response.data));

//       if (typeof successCallback === "function") {
//         successCallback("response.data");
//       }
//     } catch (err) {
//       if (typeof failureCallback === "function") {
//         failureCallback(err);
//       }
//     }
//   };

// ALL USERS
export const allUsersCall =
  (successCallback, failureCallback) => async (dispatch) => {
    try {
      const response = await axiosInstance.get(
        API_PATHS.API.USERS.LIST_ALL_USERS
      );
      if (typeof successCallback === "function") {
        successCallback(response.data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };

// Delete User

export const deleteUserCall =
  (payload, successCallback, failureCallback) => async (dispatch) => {
    try {
      const response = await axiosInstance.delete(
        `${API_PATHS.API.USERS.DELETE}/${payload}`
      );
      if (typeof successCallback === "function") {
        successCallback(response.data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };

// Authentication
export const selfCall =
  (successCallback, failureCallback) => async (dispatch) => {
    try {
      const response = await axiosInstance.get(API_PATHS.API.USERS.ME);
      dispatch(setUserData(response.data));
      if (typeof successCallback === "function") {
        successCallback(response.data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };
// LOGIN
export const verifyLoginCall =
  (payload, successCallback, failureCallback) => async (dispatch) => {
    try {
      const response = await axiosInstance.get(
        `${API_PATHS.API.USERS.VERIFY}?email=${payload.email}&password=${payload.password}`
      );

      if (typeof successCallback === "function") {
        dispatch(setUserData(response.data.user));
        localStorage.setItem(
          "blogger_jwt",
          JSON.stringify(response.data.token)
        );
        successCallback(response.data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };
// SIGNUP
export const signUpCall =
  (payload, successCallback, failureCallback) => async (dispatch) => {
    try {
      const response = await axiosInstance.post(
        `${API_PATHS.API.USERS.VERIFY}`,
        payload
      );

      if (typeof successCallback === "function") {
        dispatch(setUserData(response.data.user));
        localStorage.setItem(
          "blogger_jwt",
          JSON.stringify(response.data.token)
        );
        successCallback(response.data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };

// BLOGS
export const createBlogCall =
  (payload, successCallback, failureCallback) => async (dispatch) => {
    try {
      const response = await axiosInstance.post(
        `${API_PATHS.API.BLOGS.BLOGS}`,
        payload
      );
      if (typeof successCallback === "function") {
        successCallback(response.data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };

export const deleteBlogCall =
  (payload, successCallback, failureCallback) => async (dispatch) => {
    try {
      const response = await axiosInstance.delete(
        `${API_PATHS.API.BLOGS.BLOGS}/${payload}`
      );
      if (typeof successCallback === "function") {
        successCallback(response.data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };

export const blogsCall =
  (successCallback, failureCallback) => async (dispatch) => {
    try {
      const response = await axiosInstance.get(
        `${API_PATHS.API.BLOGS.BLOGS}`,
        {}
      );
      if (typeof successCallback === "function") {
        successCallback(response.data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };

export const singleBlogCall =
  (id, successCallback, failureCallback) => async (dispatch) => {
    try {
      const response = await axiosInstance.get(
        `${API_PATHS.API.BLOGS.BLOGS}/${id}`,
        {}
      );
      if (typeof successCallback === "function") {
        successCallback(response.data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };
