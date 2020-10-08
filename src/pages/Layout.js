import React from "react";

import Greeting from "../components/Greeting";

import { withStyles } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Container",
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <div component="div" style={{ backgroundColor: "#cfe8fc", height: "80vh", marginTop: "0px" }} >
            <p>hi</p>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Layout);
