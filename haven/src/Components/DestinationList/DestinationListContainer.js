import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import { green } from "@material-ui/core/colors";
import DestinationCard from "./DestinationCard";
import DestinationData from "./DestinationData";

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    borderStyle: "solid",
  },
  navBarStyle: {
    backgroundColor: green[500],
    borderStyle: "solid",
  },
}));

export default function DestinationListContainer() {
  const classes = useStyles();
  const DestinationCards = DestinationData.map((data) => (
    <DestinationCard title={data.title} neighborhood={data.neighborhood} />
  ));
  return (
    <Grid item className={classes.gridStyle} xs={4}>
      {DestinationCards}
    </Grid>
  );
}
