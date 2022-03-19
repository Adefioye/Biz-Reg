import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  businessEdit: {
    paddingTop: theme.spacing(10),
    width: "100wh",
  },
}));

function BusinessEdit() {
  const classes = useStyles();
  return <div className={classes.businessEdit}>BusinessEdit</div>;
}

export default BusinessEdit;
