import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  CardActionArea,
  Shadows,
} from "@material-ui/core";
import pic1 from "./sjsu.png";
import { grey } from "@material-ui/core/colors";
import { shadows } from "@material-ui/system";

// OLD USESTYLES
// const useStyles = makeStyles(() => ({
//   previewCardMediaStyle: {
//     height: 175,
//     width: 325,
//   },
//   previewCardStyle: {
//     borderRadius: 45,
//   },
//   previewCardSubTypographyStyle: {
//     color: grey[500],
//     marginLeft: "20px",
//   },
//   previewCardMainTypographyStyle: { marginLeft: "20px" },
// }));

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

  return (
    <Card className={classes.previewCardStyle} elevation={0}>
      <CardActionArea>
        <CardContent>
          <Typography
            variant="h6"
            className={classes.previewCardMainTypographyStyle}
          >
            {props.havenData.name}
          </Typography>
          <Typography
            variant="body1"
            className={classes.previewCardSubTypographyStyle}
          >
            {props.havenData.neighborhood} · {props.havenData.time} 🚲
          </Typography>
        </CardContent>

        <CardMedia
          className={classes.previewCardMediaStyle}
          image={props.havenData.image}
          title="picture"
        />
      </CardActionArea>
    </Card>
  );

  //OLD CARD
  // return (
  //   <Card className={classes.previewCardStyle}>
  //     <CardActionArea>
  //       <CardMedia
  //         className={classes.previewCardMediaStyle}
  //         image={props.havenData.image}
  //         title="picture"
  //       />
  //       <CardContent>
  //         <Typography
  //           variant="body1"
  //           className={classes.previewCardSubTypographyStyle}
  //         >
  //           {props.havenData.neighborhood} · {props.havenData.time} 🚲
  //         </Typography>
  //         <Typography
  //           variant="h6"
  //           className={classes.previewCardMainTypographyStyle}
  //         >
  //           {props.havenData.name}
  //         </Typography>
  //       </CardContent>
  //     </CardActionArea>
  //   </Card>
  // );
}
