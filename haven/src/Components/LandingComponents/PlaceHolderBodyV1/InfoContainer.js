import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  CardActionArea,
  Grid,
} from "@material-ui/core";
import InfoCard from "./InfoCard";
import InfoCardCarousel from "./InfoCardCarousel";

const useStyles = makeStyles(() => ({
  infoContainerStyle: {
    /*
    justifyContent: "flex-end",
    direction: "row",*/
    flexGrow: 1,
    // backgroundColor: "#faab04",s
    backgroundColor: "#faab04",
  },
}));

export default function InfoContainer(props) {
  const classes = useStyles();

  return (
    <Grid container xs={12} className={classes.infoContainerStyle}>
      <Grid item container xs={1}></Grid>

      <Grid container justify="center" item xs={5}>
        <InfoCard />
      </Grid>

      <Grid container justify="center" item xs={5}>
        <InfoCardCarousel />
      </Grid>
      <Grid item container xs={1}></Grid>
    </Grid>
  );
}
