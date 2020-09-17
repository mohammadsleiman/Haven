import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  CardActionArea,
  Grid,
  Paper,
} from "@material-ui/core";
import borderImg from "./InfoImages/BorderBuildingsSMALL.png";
import alexImg from "./InfoImages/alexander.jpg";
const useStyles = makeStyles(() => ({
  borderImg: {
    objectFit: "cover",
    //op: window.innerHeight,
    // position: "absolute",
    maxWidth: "100%",
    //bottom: "0",
    //left: "0",
  },
  borderImgDiv: {
    // position: "relative",
    // width: window.innerWidth,
    // height: "300px",
    // width: "300px",
    //maxWidth: "100%",
  },
}));

export default function BottomImage() {
  const classes = useStyles();

  return (
    <img src={borderImg} alt="bottom image" className={classes.borderImg}></img>
  );
}
