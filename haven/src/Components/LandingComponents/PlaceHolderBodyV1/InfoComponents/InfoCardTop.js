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
import bikeIMG from "./InfoImages/alexander.jpg";
import { grey } from "@material-ui/core/colors";
import { shadows } from "@material-ui/system";
import img from "./InfoImages/ExploreCityVector.png";
const useStyles = makeStyles(() => ({
  previewCardMediaStyle: {
    // height: 280,
    // width: 400,
    height: 280 * 0.8,
    width: 400 * 0.8,
    borderRadius: 45,
  },
  previewCardStyle: {},
  previewCardSubTypographyStyle: {
    color: "white",
    opacity: ".85",
    marginTop: "15px",
    marginBottom: "15px",
    //marginLeft: "-17px",
  },
  previewCardMainTypographyStyle: { marginLeft: "-17px" },
  previewCardActionArea: {
    borderRadius: 45,
  },
  infoCardContentStyle: {
    textAlign: "center",
  },
  cardStyle: {
    background: "transparent",
    //textAlign: "center",
    // borderRadius: 45,
    height: 280 * 0.8,
    width: 400 * 0.8,
  },
  innerCardStyle: {
    // borderRadius: 45,
    //alignItems: "end",
  },
  outerGridStyle: {
    //textAlign: "center",
    //alignItems: "end",
  },
  innerGridStyle: {
    //alignItems: "end",
  },
}));

export default function InfoCard(props) {
  const classes = useStyles();

  return (
    <Grid container direction="column" item className={classes.outerGridStyle}>
      <Grid container item>
        <Card className={classes.cardStyle} elevation={0}>
          <CardMedia
            className={classes.previewCardMediaStyle}
            image={img}
            title="picture"
          />
        </Card>
      </Grid>
      <Grid container item>
        <Typography
          variant="h5"
          className={classes.previewCardSubTypographyStyle}
          align="center"
        >
          explore your city.
        </Typography>
      </Grid>
    </Grid>
  );
}
