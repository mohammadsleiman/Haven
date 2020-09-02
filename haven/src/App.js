import React from "react";
import Navbar from "./Components/NavbarComponents/Navbar";
import RouterComponent from "./RouterComponent";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      coor: { lat: 0, long: 0 },
    };

    this.updateCoor = this.updateCoor.bind(this);
  }

  updateCoor(coor) {
    this.setState({
      coor: {
        lat: coor.lat,
        long: coor.long,
      },
    });

    console.log(
      `NEW LAT LONG STATE IN SEARCHBOX GRANDPARENT(APPJS): (lat: ${this.state.coor.lat}, long: ${this.state.coor.long})`
    );
  }

  render() {
    return (
      <div>
        <Navbar updateCoorParent={this.updateCoor} />
        <Router>
          <RouterComponent coor={this.state.coor} />
        </Router>
      </div>
    );
  }
}

export default App;
