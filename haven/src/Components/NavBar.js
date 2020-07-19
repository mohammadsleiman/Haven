import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import "./CSS/App.css";
import { green } from "@material-ui/core/colors";
import DestinationListContainer from "./DestinationList/DestinationListContainer";

const useStyles = makeStyles((theme) => ({
  navBarStyle: {
    backgroundColor: green[500],
    borderStyle: "solid",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <Grid className={classes.navBarStyle} container item direction="row">
      <h1>Haven</h1>
      <p>Convenient Stops. Safe Rides. Monumental Experiences 🚲</p>
    </Grid>
  );
}
