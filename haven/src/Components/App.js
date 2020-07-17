import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import "./CSS/App.css";
import { green } from "@material-ui/core/colors";
import DestinationListContainer from "./DestinationList/DestinationListContainer";

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    borderStyle: "solid",
  },
  navBarStyle: {
    backgroundColor: green[500],
    borderStyle: "solid",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Grid className={classes.gridStyle} container direction="column">
      <Grid className={classes.navBarStyle} container item direction="row">
        <h1>Haven</h1>
        <p>Convenient Stops. Safe Rides. Monumental Experiences 🚲</p>
      </Grid>

      <Grid className={classes.gridStyle} container item direction="row">
        <DestinationListContainer />

        <Grid item className={classes.gridStyle} xs={8}>
          <h1> I am the maps</h1>
        </Grid>
      </Grid>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <p>
        <small>Campbell, Ca</small>
      </p>
      <p>
        <small>July 2020</small>
      </p>
    </Grid>
  );
}

export default App;
