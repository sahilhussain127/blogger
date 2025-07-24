import React from "react";

const SignUp = () => {
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
            placeholder="Name"
            className="mb-4 p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primaryGradientEnd"
          />
          <input
            type="email"
            placeholder="Email"
            className="mb-4 p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primaryGradientEnd"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primaryGradientEnd"
          />

          <button className="bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd text-white font-bold py-2 rounded-full mt-2 transition hover:opacity-90">
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
