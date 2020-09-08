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
    marginLeft: "-3.5px",
    marginTop: "20px",
    //color: "black",
    // color: "#141A46", purple
    //color: "#5a04fa", //complimentary purple
    //color: "#292826",
    //color: "#faab04",
    color: "white",
    fontSize: "80px",
  },

  typoH5: {
    //marginLeft: "-3.5px",
    // marginBottom: "20px",
    // color: "#141A46", purple
    //color: "#5a04fa", //complimentary purple
    //color: "#faab04",
    color: "white",

    // color: "#292826",
  },
  typoH52: {
    //marginLeft: "-3.5px",
    //marginBottom: "20px",
    // color: "#141A46", purple
    //color: "#5a04fa", //complimentary purple
    color: "#C98B04",
    textShadow: ".4px .4px #5a04fa",

    // color: "#292826",
  },
  headerStyle: {
    marginBottom: 35,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const monumental = " \xa0 monumental experiences";

  return (
    <Grid
      container
      item
      direction="column"
      xs={12}
      className={classes.headerStyle}
    >
      <Typography className={classes.typoH2} variant="h3">
        haven.
      </Typography>
      <Grid container item>
        <Typography className={classes.typoH5} variant="h5">
          {"convenient stops."}
        </Typography>
        <Typography className={classes.typoH52} variant="h5">
          {monumental}
        </Typography>
      </Grid>
    </Grid>
  );
}
