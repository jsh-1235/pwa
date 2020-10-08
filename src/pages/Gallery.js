import React from "react";

import Greeting from "../components/Greeting";
import Content from "../components/Content";

class Gallery extends React.Component {
  state = {
    title: "Gallery",
  };

  render() {
    return (
      <div>
        <Greeting name={this.state.title} />
        <Content />
      </div>
    );
  }
}

export default Gallery;