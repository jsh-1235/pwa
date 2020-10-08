import React from "react";

import "./Greeting.css";

import { withStyles } from "@material-ui/core/styles";

import { green, yellow } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = (theme) => ({
  root: {
    backgroundColor: "#282c34",
    minHeight: "5vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16pt",
    color: "white",
  },
  image: {
    verticalAlign: "middle",
    fontSize: 32,
    padding: 0,
    margin: 0,
  },
  title: {
    verticalAlign: "middle",
    fontSize: 24,
    color: yellow[100],
    padding: 0,
    margin: 0,
  },
});

class Greeting extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={this.props.classes.root}>
        <div>
          <DeleteIcon className={classes.image} style={{ color: green[200] }} />
          <span className={classes.title}>{this.props.name}</span>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Greeting);
