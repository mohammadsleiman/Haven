import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  CardActionArea,
  Grid,
} from "@material-ui/core";
import axios from "axios";
import PreviewCard from "../LandingComponents/PlaceHolderBodyV1/PreviewSectionComponents/PreviewCard";
const useStyles = makeStyles(() => ({
  headerStyleMain: {
    textAlign: "center",
    marginTop: "50px",
  },
  headerStyleSecondary: {
    marginBottom: "50px",
    textAlign: "center",
  },
}));

export default function SearchDestinations(props) {
  const classes = useStyles();
  var coffeeData;
  const [state, setState] = useState({ destinationPreviewsData: [] });

  useEffect(() => {
    axios
      .get("http://localhost:5000/destination/get", {
        params: {
          coor: { lat: props.coor.lat, long: props.coor.long },
          //radius: 6,
        },
      })
      .then((response) => {
        console.log("response.data", response.data);
        // coffeeData = response.data;
        setState({ destinationPreviewsData: response.data });
      });
  }, []);

  const destinationArr = state.destinationPreviewsData.map(
    (destinationData) => {
      return (
        <Grid item container lg={4} md={6} xs={12}>
          <PreviewCard
            destinationData={destinationData}
            key={destinationData._id}
          />
        </Grid>
      );
    }
  );
  console.log("coffeeData", coffeeData);

  if (state.destinationPreviewsData.length > 0) {
    return (
      <Grid container direction="column">
        <Typography variant="h3" className={classes.headerStyleMain}>
          Coffee Havens
        </Typography>
        <Typography variant="h5" className={classes.headerStyleSecondary}>
          near
        </Typography>
        <Grid container item>
          <Grid item xs={2}></Grid>

          <Grid container item xs={8}>
            {destinationArr}
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>
    );
  } else {
    return null;
  }
}
