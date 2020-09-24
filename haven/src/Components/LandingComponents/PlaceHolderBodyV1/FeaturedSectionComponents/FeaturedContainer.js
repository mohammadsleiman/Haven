import React from "react";
import FeaturedCard from "./FeaturedCard";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  typoH2: {
    marginLeft: "-3.5px",
    color: "white",
  },
  featuredCardGrid: {
    justifyContent: "space-between",
  },
  featuredCardContainerHeader: {
    marginTop: 50,
    marginBottom: 50,
  },
  featuredCardContainer: {
    backgroundColor: "#000000",
    //marginBottom: 50,
  },
}));

export default function FeaturedContainer(props) {
  const classes = useStyles();
  // let HavenType = props.havensData[0].category;

  console.log(props);
  //const previewCards = props.havensData.map((destinationData) => {

  const FeaturedCards = () => {
    if (props.havensData.length > 0) {
      return (
        <Grid container className={classes.featuredCardGrid} item>
          <Grid item>
            <FeaturedCard
              destinationData={props.havensData[0]}
              key={props.havensData[0]._id}
            />
          </Grid>
          <Grid item>
            <FeaturedCard
              destinationData={props.havensData[1]}
              key={props.havensData[1]._id}
            />
          </Grid>
        </Grid>
      );
    } else {
      return <h1>LOADING FEATURED CARDS...</h1>;
    }
  };

  return (
    <Grid
      container
      item
      direction="column"
      className={classes.featuredCardContainer}
    >
      <Grid container item className={classes.featuredCardContainerHeader}>
        <Grid container item xs={2}></Grid>
        <Grid container item direction="column" xs={10}>
          <Typography className={classes.typoH2} variant="h2">
            featured
          </Typography>
          <Typography variant="h5">popular biking. curated weekly.</Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" item>
        <Grid item xs={2} />
        <Grid item container justifyContent="center" xs={8}>
          {FeaturedCards()}
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
}

/*
  return (
    <Grid container item xs={12}>
      <Grid container item xs={1}></Grid>
      <Grid container item direction="column" xs={5}>
        <Typography className={classes.typoH2} variant="h3">
          featured
        </Typography>
        <Typography variant="h5">popular biking. curated weekly.</Typography>
        <PreviewCard
          destinationData={props.havensData[0]}
          key={props.havensData[0]._id}
        />
      </Grid>
    </Grid>
  );
  */
