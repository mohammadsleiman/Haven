import React from "react";
import WcIcon from "@material-ui/icons/Wc";
import LocalCafeIcon from "@material-ui/icons/LocalCafe"; //coffee
import LocalDrinkIcon from "@material-ui/icons/LocalDrink"; //water
import LocalParkingTwoToneIcon from "@material-ui/icons/LocalParkingTwoTone";
import { green, grey, blue, purple } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";

import {
  Card,
  Chip,
  Grid,
  makeStyles,
  CardMedia,
  Typography,
  Button,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  destinationCardMediaStyle: {
    height: 300,
    width: 225,
    borderRadius: 45,
  },

  buttonGridStyle: {
    marginTop: "10px",
  },
  chipStyle: {
    marginLeft: "15px",
  },
  renderGridStyle: {
    justifyContent: "flex-start",
  },
  paperStyle: {
    height: "50px",
  },
}));

export default function DestinationCard(props) {
  const classes = useStyles();
  let history = useHistory();

  const {
    attributes,
    name,
    // category,
    neighborhood,
    // rating,
    // distanceMiles,
    links,
    img,
  } = props.destinationData;

  const bikeRidingRateMPH = 12;
  const latlongConverstionRate = 69.2;

  function getTravelDistance() {
    var travelDistances;
    if (props.destinationData.location) {
      //checks to see if props are filled with defined data yet

      travelDistances = (
        latlongConverstionRate *
        bikeRidingRateMPH *
        Math.sqrt(
          Math.pow(
            props.destinationData.location.coordinates[0] - props.coor.long,
            2
          ) +
            Math.pow(
              props.destinationData.location.coordinates[1] - props.coor.lat,
              2
            )
        )
      ).toFixed(0);
    }

    return travelDistances;
  }
  const travelDistance = getTravelDistance();

  function getIcon(attribute) {
    const attributeColor = getAttributeColor(attribute);
    switch (attribute) {
      case "Locally Owned":
        return <WcIcon style={{ color: attributeColor }} />;
      case "Mtn Bike Recommended":
        return <WcIcon style={{ color: attributeColor }} />;
      case "Quality Coffee":
        return <LocalCafeIcon style={{ color: attributeColor }} />;
      case "️️Bike Parking":
        return <LocalParkingTwoToneIcon style={{ color: attributeColor }} />;
      case "Bottle Refill":
        return <LocalDrinkIcon style={{ color: attributeColor }} />;
      case "Bathrooms":
        return <WcIcon style={{ color: attributeColor }} />;
      case "Outdoor Seating":
        return <WcIcon style={{ color: attributeColor }} />;
      default:
        return <WcIcon style={{ color: attributeColor }} />;
    }
  }

  function getAttributeColor(attribute) {
    switch (attribute) {
      case "Locally Owned":
        return green[500];
      case "Mtn Bike Recommended":
        return purple[500];
      case "Quality Coffee":
        return "#FDB813";
      case "️️Bike Parking":
        return blue[500];
      default:
        return grey[500];
    }
  }
  /*
  {
    function getAttributeColorStyle2(attribute) {
    switch (attribute) {
      case "Locally Owned":
        return { color: red[200] };
      case "Mtn Bike Recommended":
        return { backgroundColor: grey[500], color: "#ffffff" };
      case "Quality Coffee":
        return { backgroundColor: grey[300], color: "#ffffff" };
      case "️️Bike Parking":
        return { backgroundColor: grey[300], color: "#ffffff" };
      case "Bottle Refill":
        return { backgroundColor: grey[300], color: "#ffffff" };
      case "Bathrooms":
        return { backgroundColor: grey[300], color: "#ffffff" };
      case "Outdoor Seating":
        return { backgroundColor: grey[300], color: "#ffffff" };
    }
  }
  }*/

  function getAttributeColorStyle(attribute) {
    const attributeColor = getAttributeColor(attribute);
    return {
      borderColor: attributeColor,
      color: attributeColor,
      borderWidth: "2px",
    };

    /*switch (attribute) {
      case "Locally Owned":
        return {
          borderColor: attributeColor,
          color: attributeColor,
          borderWidth: "2px",
          // marginLeft: "10px",
        };
      case "Mtn Bike Recommended":
        return {
          borderColor: attributeColor,
          color: attributeColor,
          borderWidth: "2px",
          // marginLeft: "10px",
        };
      case "Quality Coffee":
        return {
          borderColor: attributeColor,
          color: attributeColor,
          borderWidth: "2px",
          // marginLeft: "10px",
        };
      case "️️Bike Parking":
        return {
          borderColor: attributeColor,
          color: attributeColor,
          borderWidth: "2px",
          // marginLeft: "10px",
        };
      case "Bottle Refill":
        return {
          borderColor: attributeColor,
          color: attributeColor,
          borderWidth: "2px",
          // marginLeft: "10px",
        };
      case "Bathrooms":
        return {
          borderColor: attributeColor,
          color: attributeColor,
          borderWidth: "2px",
          // marginLeft: "10px",
        };
      case "Outdoor Seating":
        return {
          borderColor: attributeColor,
          color: attributeColor,
          borderWidth: "2px",
          // marginLeft: "10px",
        };
      default:
        return {};
    } */
  }

  function renderAttributes() {
    if (attributes) {
      return attributes.map((attribute) => (
        <Grid container item className={classes.renderGridStyle}>
          <Chip
            className="classes.chipStyle"
            label={attribute}
            icon={getIcon(attribute)}
            style={getAttributeColorStyle(attribute)}
            //color={green[400]}
            variant="outlined"
          />
        </Grid>
      ));
    }
  }

  return (
    <div>
      <Paper className={classes.paperStyle}></Paper>
      <Card elevation={0}>
        <Grid container>
          <Grid container item xs={2}></Grid>
          <Grid container item xs={5}>
            <Grid container item xs={4}>
              <CardMedia
                className={classes.destinationCardMediaStyle}
                image={img}
                title="picture"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid
              container
              item
              xs={7}
              direction="column"
              className={classes.CardHeaderTextStyle}
            >
              <Typography variant="h3">{name}</Typography>
              <Typography variant="h6">{`${neighborhood} · ${travelDistance} mi 🚲 `}</Typography>
              <Grid container item className={classes.buttonGridStyle}>
                <Button
                  variant="outlined"
                  style={{ borderRadius: 6 }}
                  onClick={() =>
                    (window.location.href = `https://www.google.com/maps/place/${links.map}`)
                  }
                >
                  <Typography variant="body1">Directions</Typography>
                </Button>
                <Button
                  variant="outlined"
                  style={{ marginLeft: "15px", borderRadius: 6 }}
                  onClick={() =>
                    (window.location.href = `https://www.instagram.com/${links.instagram}`)
                  }
                >
                  <Typography
                    variant="body1"
                    style={{ marginLeft: "14px", marginRight: "14px" }}
                  >
                    Instagram
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            // direction="vertical"
            item
            xs={3}
            className={classes.renderGridStyle}
          >
            {renderAttributes()}
          </Grid>
          <Grid container item xs={2}></Grid>
        </Grid>
      </Card>
    </div>
  );
}
