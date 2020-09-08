import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  CardActionArea,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";

// import pic1 from "./sjsu.png";

const useStyles = makeStyles(() => ({
  featuredCardMediaStyle: {
    height: 300,
    minWidth: 350,
    borderRadius: 45,
  },

  previewCardSubTypographyStyle: {
    color: grey[500],
  },
  featuredCardMainTypographyStyle: {},
  featuredCardStyle: {
    justifyContent: "center",
  },
}));

export default function FeaturedCard(props) {
  const classes = useStyles();
  let history = useHistory();

  return (
    <Card
      className={classes.featuredCardStyle}
      elevation={0}
      onClick={() => history.push(`/destination/${props.destinationData._id}`)}
    >
      <CardActionArea>
        <Typography
          variant="h6"
          className={classes.featuredCardMainTypographyStyle}
        >
          {props.destinationData.name}
        </Typography>
        <Typography
          variant="body1"
          className={classes.featuredCardSubTypographyStyle}
        >
          {props.destinationData.neighborhood} ·{" "}
          {props.destinationData.travelDistance} 🚲
        </Typography>

        <CardMedia
          className={classes.featuredCardMediaStyle}
          image={props.destinationData.img}
          title="picture"
        />
      </CardActionArea>
    </Card>
  );
}
