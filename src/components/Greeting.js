import React from "react";

import "./Greeting.css";

class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">{this.props.name}</h1>       
      </div>
    );
  }
}

export default Greeting;
