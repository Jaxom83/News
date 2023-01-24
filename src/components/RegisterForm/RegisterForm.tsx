import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { auth } from "../../helpers/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

interface RegisterFormValues {
  email: string;
  password: string;
  password2: string;
}

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<RegisterFormValues>();

  const registerUserWithFormData = ({
    email,
    password,
    password2,
  }: RegisterFormValues) => {
    if (password === password2) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("Successfully registered new user");
        })
        .catch((err) => {
          console.log(`Failed to register new user, ${err.message}`);
        });
    } else {
      alert("Password are not equal!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(registerUserWithFormData)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Typography variant="h2" align="center" sx={{ fontSize: "1.5rem" }}>
        Register new account
      </Typography>
      <TextField
        type="email"
        placeholder="email"
        sx={{ display: "block", my: ".5rem", mx: "auto" }}
        {...register("email", { required: true })}
      ></TextField>
      <TextField
        type="password"
        placeholder="password"
        sx={{ display: "block", my: ".5rem", mx: "auto" }}
        {...register("password", { required: true })}
      ></TextField>
      <TextField
        type="password"
        placeholder="repeat password"
        sx={{ display: "block", my: ".5rem", mx: "auto" }}
        {...register("password2", { required: true })}
      ></TextField>
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mx: "auto" }}
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
