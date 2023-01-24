import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";

interface SearchFormProps {
  setKeyword: (value: string) => void;
}

interface SearchFormValues {
  keyword: string;
}

const SearchForm = ({ setKeyword }: SearchFormProps) => {
  const { register, handleSubmit } = useForm<SearchFormValues>();

  const updateKeyword = ({ keyword }: SearchFormValues) => {
    setKeyword(keyword);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(updateKeyword)}
    >
      <TextField
        placeholder="keyword"
        sx={{ my: ".5rem", display: "block", mx: "auto" }}
        {...register("keyword", { required: true })}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mx: "auto" }}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
