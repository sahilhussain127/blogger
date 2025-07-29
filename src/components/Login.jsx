import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { verifyLoginCall } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleSubmit = async () => {
    dispatch(
      verifyLoginCall(formData, () => {
        navigate("/profile");
      })
    );
  };

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="flex h-screen bg-grayLight">
      <div className="w-1/2 flex items-center justify-center flex-col">
        <h2 className="text-4xl font-bold text-darkText mb-6">Sign in</h2>
        <input
          className="w-80 mb-4 px-4 py-2 border border-gray-300 rounded"
          type="email"
          placeholder="Email"
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
          className="w-80 mb-2 px-4 py-2 border border-gray-300 rounded"
          type="password"
          placeholder="Password"
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
        <a href="#" className="text-sm text-blue-500 mb-4">
          Forgot your password?
        </a>
        <button
          onClick={handleSubmit}
          className="bg-primaryGradientStart text-re hover:bg-primaryGradientEnd text-white px-8 py-2 rounded-full font-semibold"
        >
          SIGN IN
        </button>
      </div>

      <div className="w-1/2 bg-gradient-to-br from-primaryGradientEnd to-primaryGradientStart flex items-center justify-center text-white flex-col rounded-l-[3rem]">
        <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
        <p className="mb-6 text-center w-2/3">
          Enter your personal details and start journey with us
        </p>
        <button
          className="border border-white px-8 py-2 rounded-full font-semibold"
          onClick={navigateToSignUp}
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Login;
