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
import { grey } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  typoH2: {
    color: "white",
    fontSize: "90px",
    fontWeight: "normal",
  },

  typoH5: {
    color: "white",

    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "25px",
  },
  typoH52: {
    color: "#C98B04",
    textShadow: ".4px .4px #5a04fa",
  },
  headerStyle: {
    marginBottom: 35,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  // const monumental = " \xa0 monumental experiences";

  return (
    <Grid
      container
      item
      direction="column"
      xs={12}
      className={classes.headerStyle}
    >
      <Typography className={classes.typoH2}>haven.</Typography>
      <Typography className={classes.typoH5}>
        {"convenient stops. monumental experiences"}
      </Typography>
    </Grid>
  );
}
