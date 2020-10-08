import React from "react";

import Greeting from "../components/Greeting";

class Gallery extends React.Component {
  state = {
    title: "Gallery",
  };

  render() {
    return (
      <div>
        <Greeting name={this.state.title} />
      </div>
    );
  }
}

export default Gallery;