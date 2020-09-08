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
    height: 300,
    minWidth: 250,
    borderRadius: 20,
  },
  previewCardStyle: {
    // textAlign: "center",
  },
  previewCardSubTypographyStyle: {
    color: grey[500],
    marginLeft: "-5px",
  },
  previewCardMainTypographyStyle: {
    marginTop: "-10px",
    marginLeft: "-5px",
    // textAlign: "center",
  },
  CardActionAreaStyle: {
    borderRadius: 20,
  },
}));

export default function PreviewCardSuma(props) {
  const classes = useStyles();
  let history = useHistory();
  console.log("img", props.destinationData.img);
  return (
    <Card
      className={classes.previewCardStyle}
      elevation={0}
      onClick={() => history.push(`/destination/${props.destinationData._id}`)}
    >
      <CardActionArea className={classes.CardActionAreaStyle}>
        <CardMedia
          className={classes.previewCardMediaStyle}
          image={props.destinationData.img}
          title="picture"
        />
      </CardActionArea>
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
    </Card>
  );
}
