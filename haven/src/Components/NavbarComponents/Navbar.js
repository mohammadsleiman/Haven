import React from "react";
import { Typography, Grid } from "@material-ui/core";
import SearchPlacesAutoCompleteBox from "./GoogleCloudComponents/SearchPlacesAutoCompleteBox";
import Header from "../LandingComponents/PlaceHolderBodyV1/Header";
import axios from "axios";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //destinationPreviewsData: [],

      /* SAVE IPAPI CALLS WITH DEFAULT PROPS */
      address: "Campbell, CA, USA",
      city: "Campbell",
      regionCode: "CA",
      countryName: "USA",

      /* 
      city: "",
      regionCode: "",
      countryName: "",
      address: "",
      */

      coor: { long: 0, lat: 0 },
    };
    this.updateCoor = this.updateCoor.bind(this);
  }

  /* USES IPAPI API TO GET USER'S COARSE LOCATION FROM USER'S IP ADDRESS
  RUN ON CLIENT-SIDE ONLY*/

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

  updateCoor(coor) {
    this.setState({
      coor: {
        lat: coor.lat,
        long: coor.long,
      },
    });

    console.log(
      `NEW LAT LONG STATE IN SEARCHBOX PARENT (NAVBARJS): (lat: ${this.state.coor.lat}, long: ${this.state.coor.long})`
    );
    this.props.updateCoorParent(coor);
  }

  componentDidMount() {
    /* GET GEOLOCATION INFO*/
    //this.getUserCityStateCountry();
  }

  render() {
    return (
      <Grid
        container
        item
        style={{
          /*marginBottom: "60px",
          marginTop: "20px",*/
          backgroundColor: "#48A7FF",
        }}
        direction="column"
      >
        <Grid container item>
          <Header />
        </Grid>
        <Grid
          container
          item
          xs={4}
          style={
            {
              // justifyContent: "flex-end",
              // marginTop: "15px",
              // marginBottom: "20px",
              // alignItems: "flex-end",
            }
          }
        >
          <SearchPlacesAutoCompleteBox
            address={this.state.address}
            updateCoorParent={this.updateCoor}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Navbar;
