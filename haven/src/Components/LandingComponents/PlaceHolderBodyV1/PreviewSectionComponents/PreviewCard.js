import React from "react";
import {
  Chip,
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  CardActionArea,
  Paper,
  Grid,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import DoneIcon from "@material-ui/icons/Done";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

// import pic1 from "./sjsu.png";

const useStyles = makeStyles(() => ({
  previewCardMediaStyle: {
    height: 350,
    minWidth: 250,
    borderRadius: 0,
  },
  previewCardStyle: {
    // textAlign: "center",
    backgroundColor: "#ffffff",
    marginBottom: "30px",
    borderRadius: 0,
    width: "300px",
    boxShadow: "0px 4px 35px 4px rgba(0, 0, 0, 0.2)",
  },
  previewCardSubTypographyStyle: {
    color: grey[400],
    marginBottom: "10px",
  },
  previewCardMainTypographyStyle: {
    marginTop: "-10px",
    color: grey[700],
    //color: "#68696B",
    // textAlign: "center",
  },
  CardActionAreaStyle: {
    borderRadius: 0,
  },
  chipStyle: {
    color: "#c9cbcc",
    marginRight: "4px",
    marginTop: "2px",
    marginBottom: "2px",
    //axHeight: "15px",
  },
}));

export default function PreviewCard(props) {
  const classes = useStyles();
  let history = useHistory();
  console.log("img", props.destinationData.img);

  const chipComponents = props.destinationData.attributes
    .slice(0, 2)
    .map((attribute) => {
      return (
        <Chip
          avatar={<CheckCircleIcon style={{ color: "#c9cbcc" }} />}
          className={classes.chipStyle}
          label={attribute}
          variant="outlined"
          size="small"
        />
      );
    });
  var endChipComponent;
  var length = 0;
  if (props.destinationData.attributes) {
    length = props.destinationData.attributes.length - 2;
    if (length > 0) {
      endChipComponent = (
        <Chip
          avatar={<CheckCircleIcon style={{ color: "#c9cbcc" }} />}
          className={classes.chipStyle}
          label={`+ ${length} more`}
          variant="outlined"
          size="small"
        />
      );
    }
  }

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

        <CardContent>
          <Typography
            variant="h5"
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
          {chipComponents}
          {endChipComponent}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
