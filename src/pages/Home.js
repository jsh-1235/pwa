import React from "react";

import Greeting from "../components/Greeting";

class Home extends React.Component {
  state = {
    title: "Home",
  };

  render() {
    return (
      <div>        
        <Greeting name={this.state.title} />
      </div>
    );
  }
}

export default Home;
