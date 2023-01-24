import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <Typography variant="h6" sx={{ fontWeight: 100, textAlign: "center" }}>
        Don't have an account yet? Register now!
      </Typography>
      <Link to="/register" style={{ textDecoration: "none" }}>
        <Button variant="outlined" sx={{ display: "block", mx: "auto" }}>
          Register
        </Button>
      </Link>
    </>
  );
};

export default LoginPage;
