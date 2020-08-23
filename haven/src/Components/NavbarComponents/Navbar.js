import React, { Component } from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import SearchPlacesAutoCompleteBox from "./GoogleCloudComponents/SearchPlacesAutoCompleteBox";
import getUserCityStateCountry from "../../Api/ipAPI/getUserCityStateCountry";
import axios from "axios";

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      //destinationPreviewsData: [],
      //address: "Campbell, CA, USA",
      //city: "Campbell",
      //regionCode: "CA",
      //countryName: "USA",
      city: "",
      regionCode: "",
      countryName: "",
      address: "",
      long: 0,
      lat: 0,
    };
  }

  getUserCityStateCountry() {
    console.log("get request");
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        this.setState({
          countryName: data.country_name, //USA
          regionCode: data.region_code, //State (out of 50) CA
          city: data.city, //Campbell, etc
          address: `${data.city}, ${data.region_code}, ${data.country_name}`,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    /* GET GEOLOCATION INFO*/
    this.getUserCityStateCountry();
  }

  render() {
    return (
      <Grid container>
        <Grid
          container
          item
          xs={12}
          style={{
            justifyContent: "center",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          <Typography variant="h4">Havens near</Typography>
          <SearchPlacesAutoCompleteBox address={this.state.address} />
        </Grid>
        <Grid container item xs={3}></Grid>
      </Grid>
    );
  }
}

export default Navbar;
