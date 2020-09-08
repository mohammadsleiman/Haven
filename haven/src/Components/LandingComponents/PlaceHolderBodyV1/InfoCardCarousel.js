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
import InfoCarousel from "./InfoCarousel";
import bikeIMG from "./InfoImages/alexander.jpg";
import { grey } from "@material-ui/core/colors";
import CarouselPage from "./InfoCarousel";

const useStyles = makeStyles(() => ({
  previewCardMediaStyle: {
    height: 400,
    width: 500,
    borderRadius: 45,
  },
  previewCardStyle: {
    width: 500,
    height: 400,
    borderRadius: 45,
    background: "transparent",
  },
  previewCardSubTypographyStyle: {
    color: "white",
    opacity: 0.85,
    marginTop: "15px",
    marginBottom: "15px",
    //marginLeft: "-17px",
  },
  previewCardMainTypographyStyle: { marginLeft: "-17px" },
  previewCardActionArea: {
    borderRadius: 45,
    height: 400,
    width: 500,
    //elevation: 25,
  },
  infoCardCarouselCardContentStyle: {
    textAlign: "center",
  },
  cardGrid: {
    justifyContent: "center",
  },
}));

export default function InfoCard(props) {
  const classes = useStyles();

  return (
    <Grid container item className={classes.cardGrid}>
      <Card
        className={classes.previewCardStyle}
        elevation={20}
        //onClick={() => history.push(`/destination/${props.destinationData._id}`)}
      >
        <CardActionArea className={classes.previewCardActionArea}>
          <CarouselPage />
        </CardActionArea>
      </Card>

      <Typography
        variant="h4"
        className={classes.previewCardSubTypographyStyle}
      >
        Take a break. Grab local.
      </Typography>
    </Grid>
  );
}
