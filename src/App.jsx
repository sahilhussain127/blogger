/* eslint-disable no-unused-vars */
import "./App.css";
import { selectUser } from "./redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import withAuth from "./utils/withAuth";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Admin from "./components/Admin";
import SingleBlog from "./components/SingleBlog";
function App() {
  const AuthNav = withAuth(Navbar);
  const AuthProfile = withAuth(Profile);
  return (
    <>
      <Router>
        <AuthNav />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<AuthProfile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/blogs/:id" element={<SingleBlog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
