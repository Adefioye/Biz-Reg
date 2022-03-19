import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  businessShow: {
    paddingTop: theme.spacing(10),
    width: "100wh",
  },
}));

function BusinessShow() {
  const classes = useStyles();
  return <div className={classes.businessShow}>BusinessShow</div>;
}

export default BusinessShow;
