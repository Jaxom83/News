import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";

interface RegisterFormValues {
  email: string;
  password: string;
  password2: string;
}

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<RegisterFormValues>();

  const submitHandler = (data: RegisterFormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
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
