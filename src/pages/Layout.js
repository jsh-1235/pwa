import React from "react";

//import Greeting from "../components/Greeting";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Input from "@material-ui/core/Input";

import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";
// import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "200px",
    padding: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function valueText(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function Layout() {
  const classes = useStyles();

  // Hook
  const [value, setValue] = React.useState(0);

  const [count, setCount] = React.useState(0);

  const [restrict, setRestrict] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }

    console.log("handleBlur");
  };

  const handleClick = (name, content, event) => {
    event.preventDefault();
    console.log(name + " " + content.count + " " + event);

    let value = content.count;

    if (name === "plus") {
      if (value < 10) {
        value += 1;
      }
    } else if (name === "minus") {
      if (value > 0) {
        value -= 1;
      }
    }

    setCount(value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <div component="div" style={{ backgroundColor: "#cfe8fc", height: "100vh", marginTop: "0px" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <Typography id="continuous-slider" gutterBottom>
                  Volume {value}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item>
                    <VolumeDown />
                  </Grid>
                  <Grid item xs>
                    <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                  </Grid>
                  <Grid item>
                    <VolumeUp />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <Typography id="input-slider" gutterBottom>
                  Volume
                </Typography>
                <Grid container spacing={2}>
                  <Grid item>
                    <VolumeUp />
                  </Grid>
                  <Grid item xs>
                    <Slider value={typeof value === "number" ? value : 0} onChange={handleSliderChange} aria-labelledby="input-slider" />
                  </Grid>
                  <Grid item>
                    <Input
                      className={classes.input}
                      value={value}
                      margin="dense"
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      inputProps={{
                        step: 10,
                        min: 0,
                        max: 100,
                        type: "number",
                        "aria-labelledby": "input-slider",
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <Typography id="discrete-slider-custom" gutterBottom>
                  Custom marks : {restrict}
                </Typography>
                <Slider defaultValue={20} valueLabelFormat={valueLabelFormat} getAriaValueText={valueText} aria-labelledby="discrete-slider-restrict" step={null} valueLabelDisplay="auto" marks={marks} onChange={(event, newValue) => setRestrict(newValue)} />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Button variant="outlined" color="secondary" onClick={(e) => handleClick("minus", { count }, e)}>
                  -
                </Button>
                <span style={{ margin: "10px", color: "orange" }}>{count}</span>
                <Button variant="outlined" color="secondary" onClick={(e) => handleClick("plus", { count }, e)}>
                  +
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <div className={classes.paper} style={{ margin: "10px", backgroundColor: "white" }}>
                <Button variant="outlined" color="secondary" onClick={() => setCount(count - 1)}>
                  -
                </Button>
                <span style={{ margin: "10px", color: "orange" }}>{count}</span>
                <Button variant="outlined" color="secondary" onClick={() => setCount(count + 1)}>
                  +
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}
