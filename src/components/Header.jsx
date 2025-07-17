import React, { useState } from "react";
import { Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LoginDialog from "./LoginDialog"; // adjust import path
import withAuth from "../utils/withAuth";

const Header = ({ user }) => {
  console.log(user);
  const [openLogin, setOpenLogin] = useState(false);

  // Dummy login state
  const isLoggedIn = true;

  return (
    <header className="header">
      <div className="logo">MyCompany</div>

      {isLoggedIn ? (
        <div className="profile">
          <Avatar sx={{ bgcolor: "#4f46e5", width: 32, height: 32 }}>
            <PersonIcon />
          </Avatar>
          <span className="profile-name">Sahil</span>
        </div>
      ) : (
        <div className="auth-buttons">
          <button className="login" onClick={() => setOpenLogin(true)}>
            Login
          </button>
          <button className="signup">Sign Up</button>
        </div>
      )}

      <LoginDialog open={openLogin} onClose={() => setOpenLogin(false)} />
    </header>
  );
};

const AuthHeader = withAuth(Header);
export default AuthHeader;
