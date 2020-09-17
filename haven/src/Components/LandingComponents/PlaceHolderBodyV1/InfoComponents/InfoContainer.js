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
    alignItems: "end",
    //justifyItems: "right"
  },
  divStyle: {
    marginTop: window.innerHeight * 0.25, //keep margin above haven logo
  },
  bottomImgStyle: {
    maxHeight: window.innerHeight * 0.32, // give bottom image maxheight of 1/3 of page
    // width: window.innerWidth,
    //backgroundColor: "red",
  },
  upperGridStyle: {
    height: (window.innerHeight * 2) / 3,
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
      <Grid item container xs={12} className={classes.upperGridStyle}>
        <Grid item container xs={1}></Grid>
        <Grid container item xs={11}>
          <Grid container item xs={6}>
            <div className={classes.divStyle}>
              <Navbar updateCoorParent={props.updateCoorParent} />
            </div>
          </Grid>

          <Grid className={classes.InfoCardsStyle} container xs={6}>
            <InfoCardContainer />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item className={classes.bottomImgStyle}>
        <BottomImage />
      </Grid>
    </Grid>
  );
}

{
  /*
<Grid container justify="center" item>
            <InfoCard />
          </Grid>

          <Grid container justify="center" item>
            <InfoCardCarousel />
          </Grid>

*/
}
