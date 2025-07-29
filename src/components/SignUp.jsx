/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpCall } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    dispatch(
      signUpCall(formData, () => {
        navigate("/");
      })
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-grayLight">
      <div className="bg-white shadow-lg rounded-2xl flex overflow-hidden max-w-4xl w-full">
        {/* Left Side: Sign Up Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-darkText mb-6">
            Create Account
          </h2>

          <input
            type="text"
            placeholder="First Name"
            className="mb-4 p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primaryGradientEnd"
            value={formData.first_name}
            onChange={(e) =>
              setFormData((prev) => {
                return {
                  ...prev,
                  first_name: e.target.value,
                };
              })
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            className="mb-4 p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primaryGradientEnd"
            value={formData.last_name}
            onChange={(e) =>
              setFormData((prev) => {
                return {
                  ...prev,
                  last_name: e.target.value,
                };
              })
            }
          />
          <input
            type="email"
            placeholder="Email"
            className="mb-4 p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primaryGradientEnd"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primaryGradientEnd"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => {
                return {
                  ...prev,
                  password: e.target.value,
                };
              })
            }
          />

          <button
            className="bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd text-white font-bold py-2 rounded-full mt-2 transition hover:opacity-90"
            onClick={handleSubmit}
          >
            SIGN UP
          </button>
        </div>

        {/* Right Side: Welcome Panel */}
        <div className="w-1/2 bg-gradient-to-br from-primaryGradientStart to-primaryGradientEnd text-white p-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="mb-6">
            To keep connected with us, please login with your personal info
          </p>
          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-primaryGradientStart transition">
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
