import React from "react";

import { withStyles } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const useStyles = (theme) => ({
  root: {
    fontSize: 64,
  }
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
            <p className={classes.root}>hi</p>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Layout);
