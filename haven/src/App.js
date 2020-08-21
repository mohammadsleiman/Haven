import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Header from "./Components/HeaderComponents/Header";
import Body from "./Components/LandingComponents/Body";
import RouterComponent from "./RouterComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <RouterComponent />
      </Router>
    </div>
  );
}

export default App;
