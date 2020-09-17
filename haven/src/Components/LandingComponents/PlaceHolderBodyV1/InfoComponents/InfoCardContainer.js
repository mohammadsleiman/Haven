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
import InfoCardTop from "./InfoCardTop";
import InfoCardBottom from "./InfoCardBottom";
import BottomImage from "./BottomImage";
const useStyles = makeStyles(() => ({
  paperStyle: {
    height: "30px",
    backgroundColor: "transparent",
  },
  paperStyleMiddle: {
    height: "50px",
    backgroundColor: "transparent",
  },
}));

export default function InfoCardContainer(props) {
  const classes = useStyles();

  return (
    <Grid container direction="column" item>
      <Paper className={classes.paperStyle} elevation={0} />

      <InfoCardTop />
      <Paper className={classes.paperStyleMiddle} elevation={0} />
      <InfoCardBottom />
      <Paper className={classes.paperStyle} elevation={0} />
    </Grid>
  );
}
