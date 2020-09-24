import React from "react";
import { Paper, Typography } from "@material-ui/core";
import PreviewCardContainer from "./PreviewCardContainer";
import axios from "axios";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = { destinationPreviewsData: [] };
  }

  componentDidMount(prevProps, prevState) {
    console.log("AXIOS CALL BEING PERFORMED in componentDidMount");

    /* CHECKS FIRST TO SEE IF COOR LOADED BEFORE GETTING DESTINATIONS */
    if (this.props.coor.lat && this.props.coor.long) {
      axios
        .get("http://localhost:5000/destination/get", {
          params: {
            coor: { lat: this.props.coor.lat, long: this.props.coor.long },
            // radius: 6,
          },
        })
        .then((response) => {
          console.log("IN BODY JS:");
          console.log("PRINTING RESPONSE DATA");
          console.log(response.data);
          console.log("RESPONSE DATA PRINTED");
          if (response.data.length > 0) {
            this.setState({ destinationPreviewsData: response.data });

            /* PASSES DESTINATIONPREVIEWSDATA UP TO PARENT */
            this.props.getDestinationsPreviewsData(response.data);
          } else {
            console.log("no response from server");
          }
        })
        .catch((err) => console.log(err));
    }
  }

  /* RUN AXIOS ONLY IF PROPS CHANGE */
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.coor.lat !== prevProps.coor.lat ||
      this.props.coor.long !== prevProps.coor.long
    ) {
      console.log("AXIOS CALL BEING PERFORMED in update");

      axios
        .get("http://localhost:5000/destination/get", {
          params: {
            coor: { lat: this.props.coor.lat, long: this.props.coor.long },
            //radius: 6,
          },
        })
        .then((response) => {
          console.log("IN BODY JS:");
          console.log("PRINTING RESPONSE DATA");
          console.log(response.data);
          console.log("RESPONSE DATA PRINTED");

          const bikeRidingRateMPH = 12;
          const latlongConverstionRate = 69.2;
          if (response.data.length > 0) {
            var destinationResponseData = response.data;
            destinationResponseData.map((destination) => {
              destination.travelDistance = (
                latlongConverstionRate *
                bikeRidingRateMPH *
                Math.sqrt(
                  Math.pow(
                    destination.location.coordinates[0] - this.props.coor.long,
                    2
                  ) +
                    Math.pow(
                      destination.location.coordinates[1] - this.props.coor.lat,
                      2
                    )
                )
              ).toFixed(0);
            });
            console.log("SETTING STATE TO NEW DESTINATION PREVIEWS DATA: ");
            console.log(destinationResponseData);
            this.setState({ destinationPreviewsData: destinationResponseData });
          } else {
            console.log("no response from server");
          }
        })
        .catch((err) => console.log("ERROR1"));
    }
  }

  render() {
    const landmarkData = this.state.destinationPreviewsData.filter(
      (item) => item.category === "landmark"
    );
    const coffeeData = this.state.destinationPreviewsData.filter(
      (item) => item.category === "coffee"
    );
    const viewData = this.state.destinationPreviewsData.filter(
      (item) => item.category === "view"
    );
    return (
      <div>
        <Typography>COFFEE</Typography>
        <PreviewCardContainer havensData={coffeeData} />
        <Paper elevation={0} style={{ height: "100px" }} />
        <Typography>LANDMARK</Typography>
        <PreviewCardContainer havensData={landmarkData} />
        <Paper elevation={0} style={{ height: "100px" }} />
        <Typography>VIEWS</Typography>
        <PreviewCardContainer havensData={viewData} />
      </div>
    );
  }
}
export default Body;
