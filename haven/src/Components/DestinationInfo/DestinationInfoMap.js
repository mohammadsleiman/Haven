import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  gridStyle: {
    borderStyle: "solid",
  },
}));

export default function DestinationMap() {
  const classes = useStyles();

  return <p>I am the map</p>;
}
