import React from "react";
import { Grid, makeStyles, Card, CardHeader, Avatar } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import FreeBreakfastOutlinedIcon from "@material-ui/icons/FreeBreakfastOutlined";

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    borderStyle: "solid",
  },
  cardStyle: {
    height: "300px",
  },
}));

export default function DestinationInfoCard() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        className={classes.cardStyle}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <FreeBreakfastOutlinedIcon></FreeBreakfastOutlinedIcon>
          </Avatar>
        }
      />
    </Card>
  );
}
