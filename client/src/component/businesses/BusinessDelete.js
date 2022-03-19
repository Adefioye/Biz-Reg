import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  businessDelete: {
    paddingTop: theme.spacing(10),
    width: "100wh",
  },
}));

function BusinessDelete() {
  const classes = useStyles();
  return <div className={classes.businessDelete}>BusinessDelete</div>;
}

export default BusinessDelete;
