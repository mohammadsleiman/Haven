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
import img from "./InfoImages/FindLocalVector.png";
const useStyles = makeStyles(() => ({
  previewCardMediaStyle: {
    height: 153 * 0.7,
    width: 367 * 0.7,
    // borderRadius: 45,
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
    // borderRadius: 45,
  },

  cardStyle: {
    background: "transparent",
    textAlign: "center",
    // borderRadius: 45,
    height: 153 * 0.7,
    width: 367 * 0.7,
  },
  innerCardStyle: {
    // borderRadius: 45,
  },
  outerGridStyle: {
    //textAlign: "center",
    //justifyContent: "right",
  },
  innerGridStyle: {},
}));

export default function InfoCard(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      direction="column"
      xs={12}
      className={classes.innerGridStyle}
    >
      <Grid container direction="column" item>
        <Grid item>
          <Card className={classes.cardStyle} elevation={0}>
            <CardMedia
              className={classes.previewCardMediaStyle}
              image={img}
              title="picture"
            />
          </Card>
        </Grid>
        <Grid item>
          <Typography
            variant="h5"
            className={classes.previewCardSubTypographyStyle}
            //align="center"
          >
            take a break. find something local.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
