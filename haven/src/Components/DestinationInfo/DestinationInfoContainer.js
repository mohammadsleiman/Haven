import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import { green } from "@material-ui/core/colors";
import DestinationInfoCard from "./DestinationInfoCard";

import DestinationMap from "./DestinationInfoMap";

const useStyles = makeStyles(() => ({
  gridStyle: {
    borderStyle: "solid",
  },
}));

export default function DestinationInfoContainer() {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      direction="column"
      xs={8}
      className={classes.gridStyle}
    >
      <DestinationMap />
      <DestinationInfoCard />
    </Grid>
  );
}
