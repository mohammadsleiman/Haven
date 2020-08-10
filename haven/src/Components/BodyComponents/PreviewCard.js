import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  CardActionArea,
} from "@material-ui/core";
import pic1 from "./sjsu.png";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  previewCardMediaStyle: {
    height: 175,
    width: 325,
  },
  previewCardStyle: {
    borderRadius: 45,
  },
  previewCardSubTypographyStyle: {
    color: grey[500],
    marginLeft: "20px",
  },
  previewCardMainTypographyStyle: { marginLeft: "20px" },
}));

export default function PreviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.previewCardStyle}>
      <CardActionArea>
        <CardMedia
          className={classes.previewCardMediaStyle}
          image={pic1}
          title="picture"
        />
        <CardContent>
          <Typography
            variant="body1"
            className={classes.previewCardSubTypographyStyle}
          >
            {props.havenData.neighborhood} · {props.havenData.time} 🚲
          </Typography>
          <Typography
            variant="h6"
            className={classes.previewCardMainTypographyStyle}
          >
            {props.havenData.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
