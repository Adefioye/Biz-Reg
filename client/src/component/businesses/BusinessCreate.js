import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { createBusiness } from "../../actions";

// import { Field, reduxForm } from "redux-form";

const useStyles = makeStyles((theme) => ({
  businessCreate: {
    paddingTop: theme.spacing(10),
    width: "100wh",
  },
}));

function BusinessCreate() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    industry: "",
    sector: "",
    headquarter: "",
    year: "",
    notes: "",
  });

  const { name, industry, sector, headquarter, year, notes } = state;

  // const requiredFields = [
  //   "Name",
  //   "Industry",
  //   "Sector",
  //   "Headquarter",
  //   "Year",
  //   "Notes",
  // ];

  // const allInputsNotPresent =
  //   name.length === 0 ||
  //   industry.length === 0 ||
  //   sector.length === 0 ||
  //   headquarter.length === 0 ||
  //   year.length === 0 ||
  //   notes.length === 0;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBusiness(state));
    navigate("/");
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      className={classes.businessCreate}
    >
      <Grid item> Create a business </Grid>
      <Grid item>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            id="name"
            value={name}
            onChange={(e) => handleInputChange(e)}
          />
          <TextField
            label="Industry"
            id="industry"
            value={industry}
            onChange={(e) => handleInputChange(e)}
          />
          <TextField
            label="Sector"
            id="sector"
            value={sector}
            onChange={(e) => handleInputChange(e)}
          />
          <TextField
            label="Headquarter"
            id="headquarter"
            value={headquarter}
            onChange={(e) => handleInputChange(e)}
          />
          <TextField
            label="Year"
            id="year"
            value={year}
            onChange={(e) => handleInputChange(e)}
          />
          <TextField
            label="Notes"
            id="notes"
            value={notes}
            onChange={(e) => handleInputChange(e)}
          />
          <Button
            disabled={
              name.length === 0 ||
              industry.length === 0 ||
              sector.length === 0 ||
              headquarter.length === 0 ||
              year.length === 0 ||
              notes.length === 0
            }
            variant="contained"
            type="submit"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}

export default BusinessCreate;
