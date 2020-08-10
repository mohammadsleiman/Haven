import React from "react";
import PreviewCard from "./PreviewCard";
import { Typography, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

export default function PreviewCardContainer(props) {
  const classes = useStyles();

  var HavenType = props.havensData[0].type;
  const previewCards = props.havensData.map((havenData) => {
    return (
      <Grid item container xs={4}>
        <PreviewCard havenData={havenData} />
      </Grid>
    );
  });
  return (
    <div>
      <Typography variant="h6">{HavenType}</Typography>
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
