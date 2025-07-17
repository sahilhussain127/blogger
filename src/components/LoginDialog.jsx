import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Box,
} from "@mui/material";

const LoginDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ className: "login-dialog" }}
    >
      <DialogTitle className="login-dialog-title">
        Login to MyCompany
      </DialogTitle>
      <DialogContent>
        <Box component="form" className="login-dialog-form">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            className="login-dialog-input"
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            className="login-dialog-input"
          />
        </Box>
      </DialogContent>
      <DialogActions className="login-dialog-actions">
        <Button onClick={onClose} className="login-dialog-cancel">
          Cancel
        </Button>
        <Button variant="contained" className="login-dialog-login">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
