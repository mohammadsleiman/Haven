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

import Navbar from "../../../NavbarComponents/Navbar";
import InfoCardContainer from "./InfoCardContainer";
import BottomImage from "./BottomImage";

const useStyles = makeStyles(() => ({
  infoContainerStyle: {
    /*
    justifyContent: "flex-end",
    direction: "row",*/
    // backgroundColor: "#faab04", //PHILZ YELLOW
    backgroundColor: "#48A7FF", //GOOGLE BLUE
    // backgroundColor: "#2A9D8F", //PERSIAN GREEN

    //height: window.innerHeight,
    width: window.innerWidth,
  },
  infoCardsStyle: {
    //alignItems: "end",
    //justifyItems: "right"
  },
  NavBardivStyle: {
    //marginTop: window.innerHeight * 0.25, //keep margin above haven logo
    marginTop: window.innerHeight * 0.1, //keep margin above haven logo
  },
  bottomGridStyle: {
    // maxHeight: window.innerHeight * 0.32, // give bottom image maxheight of 1/3 of page
    //maxHeight: window.innerHeight * 0.32, // give bottom image maxheight of 1/3 of page
    // width: window.innerWidth,
    //backgroundColor: "red",
    marginBottom: "2px",
    marginTop: "25px",
  },
  /*NAVBAR AND INFOCARDCONTAINER GRID */
  upperGridStyle: {
    //maxHeight: (window.innerHeight * 2) / 3,
  },
}));

export default function InfoContainer(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      xs={12}
      direction="column"
      className={classes.infoContainerStyle}
    >
      <Paper
        elevation={0}
        style={{ height: "100px", backgroundColor: "#48A7FF" }}
      ></Paper>
      <Grid item container xs={12} className={classes.upperGridStyle}>
        <Grid item container xs={2}></Grid>
        <Grid container item xs={8}>
          <Grid container item xs={12} md={7}>
            <div className={classes.NavBardivStyle}>
              <Navbar updateCoorParent={props.updateCoorParent} />
            </div>
          </Grid>

          <Grid
            className={classes.InfoCardsStyle}
            direction="column"
            container
            xs={12}
            md={5}
          >
            <InfoCardContainer />
          </Grid>
        </Grid>
        <Grid item container xs={2}></Grid>
      </Grid>
      <Grid container item className={classes.bottomGridStyle}>
        <BottomImage />
      </Grid>
    </Grid>
  );
}
