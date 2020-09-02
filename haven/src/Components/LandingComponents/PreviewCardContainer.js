import React from "react";
import PreviewCard from "./PreviewCard";
import { Grid } from "@material-ui/core";

export default function PreviewCardContainer(props) {
  // let HavenType = props.havensData[0].category;
  const previewCards = props.havensData.map((destinationData) => {
    return (
      <Grid item container xs={4}>
        <PreviewCard
          destinationData={destinationData}
          key={destinationData._id}
        />
      </Grid>
    );
  });
  return (
    <div>
      <Grid container>
        <Grid item xs={1} />
        <Grid item container spacing={7} xs={10}>
          {previewCards}
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
}
