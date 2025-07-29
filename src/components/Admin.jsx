/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { allUsersCall, deleteUserCall } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";

const Admin = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  const fetchAllUsers = async () => {
    dispatch(
      allUsersCall((data) => {
        setUsers(data);
      })
    );
  };

  const handleDeleteUser = async (id) => {
    dispatch(
      deleteUserCall(id, () => {
        fetchAllUsers();
      })
    );
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <div style={{ padding: "24px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>
        Admin - Users
      </h2>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow
              sx={{ background: "linear-gradient(to right, #ff416c, #ff4b2b)" }}
            >
              {[
                "First Name",
                "Last Name",
                "Email",
                "Password",
                "Blogs",
                "Actions",
              ].map((head) => (
                <TableCell key={head} sx={{ color: "#fff", fontWeight: 600 }}>
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.password}</TableCell>
                <TableCell>{user.blogs.length}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDeleteUser(user.id)}
                    sx={{
                      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
                      color: "#fff",
                      fontWeight: 600,
                      textTransform: "none",
                      px: 2,
                      py: 0.5,
                      borderRadius: "20px",
                      ":hover": {
                        background:
                          "linear-gradient(to right, #e03e5b, #e14223)",
                      },
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Admin;
