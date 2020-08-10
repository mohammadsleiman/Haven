import React from "react";
import { Typography, Grid, Paper, makeStyles } from "@material-ui/core";
import PreviewCardContainer from "./PreviewCardContainer";
import BodyData from "./BodyData";
const useStyles = makeStyles(() => ({
  paperStyle: {
    height: "60px",
  },
}));

export default function Body() {
  const classes = useStyles();
  // generatePreviewCardContainerData1(BodyData);
  const landmarkData = BodyData.filter((item) => item.type === "landmark");
  const coffeeData = BodyData.filter((item) => item.type === "coffee");
  const viewData = BodyData.filter((item) => item.type === "view");

  return (
    <div>
      <PreviewCardContainer havensData={coffeeData} />
      <Paper className={classes.paperStyle} elevation={0} />
      <PreviewCardContainer havensData={landmarkData} />
      <Paper className={classes.paperStyle} elevation={0} />
      <PreviewCardContainer havensData={viewData} />
    </div>
  );
}
