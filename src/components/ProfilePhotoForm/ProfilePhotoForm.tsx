import { Card, Typography, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { auth, storage } from "../../helpers/firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";
interface ProfilePhotoFormValues {
  profilePhoto: FileList;
}

const ProfilePhotoForm = () => {
  const { register, handleSubmit } = useForm<ProfilePhotoFormValues>();

  const uploadPhoto = (data: ProfilePhotoFormValues) => {
    const photo = data.profilePhoto[0];
    if (auth.currentUser) {
      const storageRef = ref(storage, `/users/${auth.currentUser.uid}/profile`);
      uploadBytes(storageRef, photo);
    }
  };

  return (
    <form onSubmit={handleSubmit(uploadPhoto)}>
      <Card sx={{ p: "1rem" }}>
        <Typography variant="h6" align="center" sx={{ fontSize: "1rem" }}>
          Upload your profile picture
        </Typography>
        <Button
          variant="contained"
          component="label"
          sx={{
            display: "block",
            mx: "auto",
            my: "1rem",
            alignContent: "center",
          }}
        >
          <Typography variant="h6" align="center" sx={{ fontSize: "1rem" }}>
            Select a file
          </Typography>
          <input
            hidden
            type="file"
            {...register("profilePhoto", { required: true })}
          />
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={{ display: "block", mx: "auto" }}
        >
          Upload
        </Button>
      </Card>
    </form>
  );
};

export default ProfilePhotoForm;
