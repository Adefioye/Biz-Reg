import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  businessCreate: {
    paddingTop: theme.spacing(10),
    width: "100wh",
  },
}));

function BusinessCreate() {
  const classes = useStyles();
  return <div className={classes.businessCreate}>BusinessCreate</div>;
}

export default BusinessCreate;
