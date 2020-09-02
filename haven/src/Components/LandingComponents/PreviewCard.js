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
  previewCardMediaStyle: {
    height: 225,
    width: 300,
    borderRadius: 45,
  },
  previewCardStyle: {},
  previewCardSubTypographyStyle: {
    color: grey[500],
    marginLeft: "-17px",
  },
  previewCardMainTypographyStyle: { marginLeft: "-17px" },
}));

export default function PreviewCard(props) {
  const classes = useStyles();
  let history = useHistory();

  return (
    <Card
      className={classes.previewCardStyle}
      elevation={0}
      onClick={() => history.push(`/destination/${props.destinationData._id}`)}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            variant="h6"
            className={classes.previewCardMainTypographyStyle}
          >
            {props.destinationData.name}
          </Typography>
          <Typography
            variant="body1"
            className={classes.previewCardSubTypographyStyle}
          >
            {props.destinationData.neighborhood} ·{" "}
            {props.destinationData.travelDistance} 🚲
          </Typography>
        </CardContent>

        <CardMedia
          className={classes.previewCardMediaStyle}
          image={"https://loremflickr.com/600/400/bicyclist"}
          title="picture"
        />
      </CardActionArea>
    </Card>
  );
}
