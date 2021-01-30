import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// React Router
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => {
              history.replace("/about");
              document.location.reload();
            }}
          >
            About
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => {
              history.replace("/resume");
              document.location.reload();
            }}
          >
            Resume
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => {
              history.replace("/");
              document.location.reload();
            }}
          >
            Portofolio
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
