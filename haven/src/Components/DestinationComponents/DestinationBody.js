import React from "react";
import axios from "axios";
import DestinationCard from "./DestinationCard";
class DestinationBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      destinationData: {},
      destinationid: this.props.match.params.destinationid,
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/destination/${this.state.destinationid}`)
      .then((response) => {
        /*console.log("in server");
        console.log("PRINTING RESPONSE DATA");
        console.log(response.data);
        console.log("RESPONSE DATA PRINTED");*/
        if (response.data) {
          this.setState({ destinationData: response.data });
        } else {
          console.log("no response from server");
        }
        //console.log(`state: ${this.state.destinationData}`);
      });
  }

  render() {
    return <DestinationCard destinationData={this.state.destinationData} />;
  }
}

export default DestinationBody;
