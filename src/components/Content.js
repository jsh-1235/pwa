import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";

import { deepOrange, green } from "@material-ui/core/colors";

import man_1 from "../images/man_1.png";
import man_2 from "../images/man_2.png";
import man_3 from "../images/man_3.png";
import man_4 from "../images/man_4.png";
import man_5 from "../images/man_5.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: "auto",
    height: "auto",
  },
  rounded: {
    color: "#fff",
    backgroundColor: green[500],
    width: "64px",
    height: "64px",
  },
  content:{
      padding:"0.5em",
      fontSize:"74pt"
  }
}));

const Content = () => {
  const classes = useStyles();

  const images = [man_1, man_2, man_3, man_4, man_5];

  //const [checked, setChecked] = React.useState([]);
  const [checked, setChecked] = React.useState([0, 1, 2, 3, 4]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense className={classes.root}>
      {[0, 1, 2, 3, 4].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;

        console.log(value);

        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              {/* <Avatar alt={`Avatar n°${value + 1}`} src={`/static/images/avatar/man_${value + 1}.png`} />               */}
              <Avatar className={classes.rounded} variant="rounded" alt={`Avatar n°${value + 1}`} src={images[value]} />
            </ListItemAvatar>
            <ListItemText className={classes.content} id={labelId} primary={`Line item ${value + 1}`} />
            <ListItemSecondaryAction>
              <Checkbox edge="end" onChange={handleToggle(value)} checked={checked.indexOf(value) !== -1} inputProps={{ "aria-labelledby": labelId }} />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Content;
