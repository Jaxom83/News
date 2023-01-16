import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../../helpers/api";
import { Typography, List } from "@mui/material";

const Homepage = () => {
  const [todaysArticles, setTodaysArticles] = useState([]);

  const today = new Date();
  const day = today.getDate();
  //   const day = today.getDate() - 1;
  const month = today.getMonth();
  //   const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear();

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=world&language=en&sortBy=popularity&from=${day}-${
          month < 10 ? `0${month}` : month
        }-${year}&apiKey=${API_KEY}`
      )
      .then((data) => {
        console.log(data.data.articles);
      });
  }, []);
  return (
    <>
      <Typography
        variant="h2"
        align="center"
        sx={{ fontSize: "2rem", mt: ".8rem" }}
      >
        Today's hottest news:
      </Typography>
      <List sx={{ width: "100%", alignContent: "center" }}></List>
    </>
  );
};

export default Homepage;
