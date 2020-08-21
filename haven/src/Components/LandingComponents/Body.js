import React from "react";
import { Typography, Grid, Paper, makeStyles } from "@material-ui/core";
import PreviewCardContainer from "./PreviewCardContainer";
import BodyData from "./BodyData";
import axios from "axios";

const useStyles = makeStyles(() => ({
  paperStyle: {
    height: "60px",
  },
}));

class Body extends React.Component {
  constructor() {
    super();

    this.state = {
      destinationPreviewsData: [],
      countryName: "",
      countryCode: "",
      city: "",
      long: 0,
      lat: 0,
    };
  }

  /* GEOLOCATION API GETTER FUNCTION */
  getGeoInfo = () => {
    console.log("get request");
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        this.setState({
          countryName: data.country_name,
          countryCode: data.country_calling_code,
          city: data.city,
          lat: data.latitude,
          long: data.longitute,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    /* GET GEOLOCATION INFO*/
    this.getGeoInfo();

    axios.get("http://localhost:5000/destination/").then((response) => {
      console.log("in server");
      console.log("PRINTING RESPONSE DATA");
      console.log(response.data);
      console.log("RESPONSE DATA PRINTED");
      if (response.data.length > 0) {
        this.setState({ destinationPreviewsData: response.data });
      } else {
        console.log("no response from server");
      }
      console.log(`state: ${this.state.destinationPreviewsData}`);
    });
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
        <h1>{`You are currently located in:${this.state.city}, at ${this.state.latitude}   `}</h1>
        <PreviewCardContainer havensData={coffeeData} />
        <Paper
          // className={classes.paperStyle}
          elevation={0}
        />
        <PreviewCardContainer havensData={landmarkData} />
        <Paper
          // className={classes.paperStyle}
          elevation={0}
        />
        <PreviewCardContainer havensData={viewData} />
      </div>
    );
  }
}
export default Body;
