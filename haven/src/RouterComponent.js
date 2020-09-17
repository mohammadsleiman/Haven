import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/NavbarComponents/Navbar";
import Body from "./Components/LandingComponents/PlaceHolderBodyV1/Body";
import DestinationBody from "./Components/DestinationComponents/DestinationBody";
class RouterComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      destinationPreviewsData: [],
    };
    this.getDestinationsPreviewsData = this.getDestinationsPreviewsData.bind(
      this
    );
  }

  getDestinationsPreviewsData(data) {
    this.setState({
      destinationPreviewsData: data,
    });
  }

  render() {
    /* COOR FROM PARENT PROPS FOR PASSING INTO ROUTER CHILD COMPONENTS */
    var parentPropsCoor = this.props.coor;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <div>
              {/* <Navbar updateCoorParent={this.props.updateCoorParent} /> */}
              <Body
                {...props}
                coor={parentPropsCoor}
                getDestinationsPreviewsData={this.getDestinationsPreviewsData}
                updateCoorParent={this.props.updateCoorParent}
              />
            </div>
          )}
        />
        <Route
          exact
          path="/destination/:destinationid"
          render={(props) => (
            <DestinationBody {...props} coor={parentPropsCoor} />
          )}
        />
      </Switch>
    );
  }
}

export default RouterComponent;
