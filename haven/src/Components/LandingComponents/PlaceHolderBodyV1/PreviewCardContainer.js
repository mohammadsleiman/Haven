import React from "react";

import PreviewCard from "./PreviewCardSuma";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  typoH2: {
    marginLeft: "-3.5px",
  },
  featuredCardGrid: {
    justifyContent: "center",
  },
  featuredCardContainer: {
    marginTop: 50,
  },
  featuredCardContainerHeader: {
    marginTop: 50,
    marginBottom: 50,
  },

  containerGridStyle: {
    // justifyContent: "space-evenly",
    // justifyContent: "space-between",
  },
}));
export default function PreviewCardContainer(props) {
  // let HavenType = props.havensData[0].category;
  const classes = useStyles();

  const previewCards = props.havensData.map((destinationData) => {
    return (
      <Grid item container xs={3}>
        <PreviewCard
          destinationData={destinationData}
          key={destinationData._id}
        />
      </Grid>
    );
  });
  return (
    <Grid
      container
      item
      direction="row"
      className={classes.featuredCardContainer}
    >
      <Grid item xs={1}></Grid>

      <Grid container item direction="column" xs={10}>
        <Grid
          container
          item
          direction="column"
          xs={12}
          className={classes.featuredCardContainerHeader}
        >
          <Typography className={classes.typoH2} variant="h2">
            coffees
          </Typography>
          <Typography variant="h5">
            local coffee. quality bike stops.
          </Typography>
        </Grid>

        <Grid item container xs={12} className={classes.containerGridStyle}>
          {previewCards}
        </Grid>
      </Grid>

      <Grid item xs={1}></Grid>
    </Grid>
  );
}
