import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import "./CSS/App.css";
import { green } from "@material-ui/core/colors";
import DestinationListContainer from "./DestinationList/DestinationListContainer";
import NavBar from "./NavBar";
import DestinationInfoContainer from "./DestinationInfo/DestinationInfoContainer";

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
      <NavBar />

      <Grid className={classes.gridStyle} container item direction="row">
        <DestinationListContainer />

        <DestinationInfoContainer />
      </Grid>
    </Grid>
  );
}

export default App;

{
  /* <br></br>
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
      </p> */
}
