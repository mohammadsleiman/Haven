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
    };
  }

  componentDidMount() {
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
        <PreviewCardContainer havensData={coffeeData} />
        <Paper elevation={0} />
        <PreviewCardContainer havensData={landmarkData} />
        <Paper elevation={0} />
        <PreviewCardContainer havensData={viewData} />
      </div>
    );
  }
}
export default Body;
