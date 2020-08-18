import React from "react";
import PreviewCard from "./PreviewCard";
import { Typography, makeStyles, Grid } from "@material-ui/core";
const useStyles = makeStyles(() => ({}));

export default function PreviewCardContainer(props) {
  const classes = useStyles();

  // let HavenType = props.havensData[0].category;
  const previewCards = props.havensData.map((destinationData) => {
    return (
      <Grid item container xs={4}>
        <PreviewCard destinationData={destinationData} />
      </Grid>
    );
  });
  return (
    <div>
      <Typography variant="h6">{"hi"}</Typography>
      <Grid container>
        <Grid xs={1} />
        <Grid item container spacing={12} xs={10}>
          {previewCards}
        </Grid>
        <Grid xs={1} />
      </Grid>
    </div>
  );
}
