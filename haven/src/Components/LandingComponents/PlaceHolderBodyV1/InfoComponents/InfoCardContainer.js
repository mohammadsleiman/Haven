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

  // <Paper className={classes.paperStyle} elevation={0} />
  // <Paper className={classes.paperStyleMiddle} elevation={0} />
  // <Paper className={classes.paperStyle} elevation={0} />

  /*<Grid container xs={12} direction="column" item>
      <InfoCardTop />
      <InfoCardBottom />
    </Grid>*/

  return (
    <div>
      <InfoCardTop />
      <Paper className={classes.paperStyle} elevation={0} />

      <InfoCardBottom />
    </div>
  );
}
