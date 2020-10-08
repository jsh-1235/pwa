import React from "react";

import Greeting from "../components/Greeting";

import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import image1 from "../images/man_1.png";
import image2 from "../images/man_2.png";
import image3 from "../images/man_3.png";
import image4 from "../images/man_4.png";
import image5 from "../images/man_5.png";

import Button from "@material-ui/core/Button";

const tileData = [
  {
    img: image1,
    title: "Image1",
    author: "author1",
    cols: 1,
  },
  {
    img: image2,
    title: "Image2",
    author: "author2",
    cols: 2,
  },
  {
    img: image3,
    title: "Image3",
    author: "author3",
    cols: 1,
  },
  {
    img: image4,
    title: "Image4",
    author: "author4",
    cols: 1,
  },
  {
    img: image5,
    title: "Image5",
    author: "author5",
    cols: 2,
  },
];

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    overflow: "hidden",
  },
  gridRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 200,
    height: 600,
  },
  divRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
});

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Home",
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Greeting name={this.state.title} />

        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
          </Grid>
          <hr />
          <div className={classes.gridRoot}>
            <GridList cellHeight={100} className={classes.gridList} cols={2}>
              {tileData.map((tile) => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                  <img src={tile.img} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
        <hr />
        <div className={classes.divRoot}>
          <Grid container spacing={1} style={{ width: "90%" }}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div>
                  <Button variant="outlined" color="secondary">
                    Secondary
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Secondary
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Button variant="outlined" color="secondary">
                  Secondary
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Button variant="outlined" color="secondary">
                  Secondary
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="outlined" color="secondary">
                  1
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="outlined" color="secondary">
                  2
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="outlined" color="secondary">
                  3
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="outlined" color="secondary">
                  4
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="outlined" color="secondary">
                  5
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="outlined" color="secondary">
                  6
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Home);
