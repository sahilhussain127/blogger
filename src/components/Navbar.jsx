import React from "react";
import { selectUser } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../redux/state/userSlice";

const Navbar = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const navigateToProfile = () => {
    navigate("/profile");
  };
  const handleLogout = () => {
    localStorage.setItem("blogger_jwt", "");
    dispatch(setUserData({}));
    navigate("/");
  };
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <button
        className="text-xl font-bold text-darkText"
        onClick={navigateToHome}
      >
        Blogger
      </button>
      <div className="flex items-center space-x-4">
        <button
          // className="bg-gradient-to-br from-primaryGradientEnd to-primaryGradientStart text-white px-4 py-2 rounded-full text-sm font-semibold"
          className="border border-solid border-primaryGradientEnd text-primaryGradientEnd px-4 py-2 rounded-full text-sm font-semibold"
          onClick={navigateToHome}
        >
          Home
        </button>
        {isEmpty(user) ? (
          <>
            <button
              className=" text-primaryGradientEnd px-4 py-2 rounded-full text-sm font-semibold"
              onClick={navigateToLogin}
            >
              Sign In
            </button>
            <button
              className=" text-primaryGradientEnd px-4 py-2 rounded-full text-sm font-semibold"
              onClick={navigateToSignUp}
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            <button
              className="border border-solid border-primaryGradientEnd text-primaryGradientEnd px-4 py-2 rounded-full text-sm font-semibold"
              onClick={handleLogout}
            >
              Log Out
            </button>
            <button
              onClick={navigateToProfile}
              className="bg-gradient-to-br from-primaryGradientEnd to-primaryGradientStart text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2"
            >
              <img
                // src="https://i.pravatar.cc/30"
                src="https://picsum.photos/30"
                alt="avatar"
                className="w-6 h-6 rounded-full"
              />
              <span>{user.first_name}</span>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
