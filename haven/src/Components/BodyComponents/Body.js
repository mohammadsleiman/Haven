import React from "react";
import { Typography, Grid, Paper, makeStyles } from "@material-ui/core";
import PreviewCardContainer from "./PreviewCardContainer";
import BodyData from "./BodyData";
const useStyles = makeStyles(() => ({
  paperStyle: {
    height: "60px",
  },
}));
var viewData = [];
var coffeeData = [];
var landmarkData = [];

function generatePreviewCardContainerData(BodyData) {
  BodyData.map((havenData) => {
    if (havenData.type === "landmark") {
      landmarkData.push(havenData);
    } else if (havenData.type === "coffee") {
      coffeeData.push(havenData);
    } else if (havenData.type === "view") {
      viewData.push(havenData);
    }
  });
}

export default function Body() {
  const classes = useStyles();
  generatePreviewCardContainerData(BodyData);

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
