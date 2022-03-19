import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import GoogleAuth from "./GoogleAuth";

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container justifyContent="space-between" direction="row">
          <Grid item>
            <Typography>BizReg</Typography>
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
