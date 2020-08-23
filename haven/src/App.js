import React from "react";
import Navbar from "./Components/NavbarComponents/Navbar";
import RouterComponent from "./RouterComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <RouterComponent />
      </Router>
    </div>
  );
}

export default App;
