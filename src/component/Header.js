import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import GoogleAuth from "./GoogleAuth";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "linear-gradient(to bottom, #081221, #03080f)",
    height: "5em",
    color: "#ffffff",
  },
  homeIcon: {
    textDecoration: "none",
    color: "inherit",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <Grid item>
            <Typography
              variant="h3"
              component={Link}
              to="/"
              className={classes.homeIcon}
            >
              BizReg
            </Typography>
          </Grid>
          <Grid item>
            <GoogleAuth />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
