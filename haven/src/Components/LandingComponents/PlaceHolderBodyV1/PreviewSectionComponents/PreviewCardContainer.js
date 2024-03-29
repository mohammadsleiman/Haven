import React, { useState } from "react";

import PreviewCard from "./PreviewCard";
import { Grid, Typography, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  typoH2: {
    marginLeft: "-3.5px",
  },
  featuredCardGrid: {
    justifyContent: "center",
  },
  featuredCardContainer: {
    marginTop: 50,
    backgroundColor: "#F5F5F5",
  },
  featuredCardContainerHeader: {
    marginTop: 50,
    marginBottom: 50,
  },

  containerGridStyle: {
    // justifyContent: "space-evenly",
    // justifyContent: "space-between",
  },
  buttonGridStyle: {
    justifyContent: "flex-end",
  },
  buttonStyle: {
    marginBottom: "30px",
  },
}));

export default function PreviewCardContainer(props) {
  const [amountViewed, setAmountViewed] = useState(3);
  const classes = useStyles();
  var previewCards;
  previewCards = props.havensData
    .slice(amountViewed - 3, amountViewed)
    .map((destinationData) => {
      return (
        <Grid item container lg={4} md={6} xs={12}>
          <PreviewCard
            destinationData={destinationData}
            key={destinationData._id}
          />
        </Grid>
      );
    });

  function handleButtonClick() {
    if (amountViewed == 3) {
      setAmountViewed((prev) => prev + 3);
      previewCards = props.havensData
        .slice(amountViewed - 3, amountViewed)
        .map((destinationData) => {
          return (
            <Grid item container xs={3}>
              <PreviewCard
                destinationData={destinationData}
                key={destinationData._id}
              />
            </Grid>
          );
        });
    }
  }
  function handleLessButtonClick() {
    if (amountViewed == 6) {
      setAmountViewed((prev) => prev - 3);
    }
    previewCards = props.havensData
      .slice(amountViewed - 3, amountViewed)
      .map((destinationData) => {
        return (
          <Grid item container xs={3}>
            <PreviewCard
              destinationData={destinationData}
              key={destinationData._id}
            />
          </Grid>
        );
      });
  }

  return (
    <Grid
      container
      item
      direction="row"
      className={classes.featuredCardContainer}
    >
      <Grid item xs={2}></Grid>

      <Grid container item direction="column" xs={8}>
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
        <Grid item container xs={12} className={classes.buttonGridStyle}>
          <Button
            className={classes.buttonStyle}
            color="secondary"
            onClick={() => {
              handleLessButtonClick();
            }}
          >
            {"<"}
          </Button>
          <Button
            className={classes.buttonStyle}
            color="secondary"
            onClick={() => {
              handleButtonClick();
            }}
          >
            {">"}
          </Button>
        </Grid>
      </Grid>

      <Grid item xs={2}></Grid>
    </Grid>
  );
}
