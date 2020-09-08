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

const useStyles = makeStyles(() => ({
  previewCardMediaStyle: {
    height: 400,
    width: 500,
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
    textAlign: "center",
    borderRadius: 45,
    height: 400,
    width: 500,
  },
  innerCardStyle: {
    borderRadius: 45,
  },
  outerGridStyle: {
    textAlign: "center",
  },
  innerGridStyle: {
    justifyContent: "center",
  },
}));

export default function InfoCard(props) {
  const classes = useStyles();

  return (
    <Grid container item className={classes.outerGridStyle}>
      <Grid container item className={classes.innerGridStyle}>
        <Card
          elevation={5}
          className={classes.cardStyle}
          //onClick={() => history.push(`/destination/${props.destinationData._id}`)}
        >
          <CardActionArea className={classes.previewCardActionArea}>
            <CardMedia
              className={classes.previewCardMediaStyle}
              //image={"https://loremflickr.com/600/400/bicyclist"}
              image={bikeIMG}
              title="picture"
            />
          </CardActionArea>
        </Card>
        <Typography
          variant="h4"
          className={classes.previewCardSubTypographyStyle}
          align="center"
        >
          Explore your City 🚲
        </Typography>
      </Grid>
    </Grid>
  );
}
