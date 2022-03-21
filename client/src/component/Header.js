import React from "react";
import { useNavigate, Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import GoogleAuth from "./GoogleAuth";

const useStyles = makeStyles((theme) => ({
  homeIcon: {
    textDecoration: "none",
    color: "inherit",
  },
}));

function Header() {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container justifyContent="space-between" direction="row">
          <Grid item>
            <Typography component={Link} to="/" className={classes.homeIcon}>
              BizReg
            </Typography>
          </Grid>
          <Grid item>
            <Typography>Search</Typography>
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
