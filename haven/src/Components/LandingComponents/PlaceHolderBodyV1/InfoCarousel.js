import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  CardActionArea,
  Grid,
} from "@material-ui/core";

import coen from "./InfoImages/coen.jpg";
import febiyan from "./InfoImages/febiyan.jpg";
import ramiro from "./InfoImages/ramiro.jpg";

const useStyles = makeStyles(() => ({
  imgStyle: { height: 400, width: 500, borderRadius: 45 },
}));

const CarouselPage = () => {
  const classes = useStyles();

  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className={classes.imgStyle}
                src={febiyan}
                alt="First slide"
              />
              <h1
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: 8,
                  left: 30,
                }}
              >
                Academic Coffee
              </h1>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className={classes.imgStyle}
                src={ramiro}
                alt="Second slide"
              />
              <h1
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: 8,
                  left: 30,
                }}
              >
                Blue Bottle
              </h1>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className={classes.imgStyle} src={coen} alt="Third slide" />
              <h1
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: 8,
                  left: 30,
                }}
              >
                Voyager Craft Coffee
              </h1>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;
