import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";

//==================================================================
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { pink, orange } from "@material-ui/core/colors";

import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";

const drawerWidth = 200;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[400],
    },
    secondary: {
      main: orange[400],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  header: {
    flexGrow: 1,
  },
  main: {
    flexGrow: 1,
    padding: "10px",
  },
  footer: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    padding: "0px",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexGrow: 1,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuTitle: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(5),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function App() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <header>
            <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open })}>
              <Toolbar>
                <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, open && classes.hide)}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.menuTitle}>
                  Menu
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{ paper: classes.drawerPaper }}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
              </div>
              <Divider />
              <List>
                <ListItem button component={Link} to="/">
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/gallery">
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Gallery" />
                </ListItem>
              </List>
            </Drawer>
          </header>

          <main className={clsx(classes.content, { [classes.contentShift]: open })}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/gallery" component={Gallery} />
              <Route component={NotFound} />
            </Switch>
          </main>

          <footer className={classes.footer}></footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
