import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./Components/LandingComponents/Body";
import DestinationBody from "./Components/DestinationComponents/DestinationBody";
function RouterComponent() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Body {...props} />} />
      <Route
        exact
        path="/destination/:destinationid"
        render={(props) => <DestinationBody {...props} />}
      />
    </Switch>
  );
}

export default RouterComponent;
